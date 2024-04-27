import { useEffect, useState } from 'react';
import ArticleCard from '../ArticleCard/ArticleCard';
import './Articles.css';

export default function Articles({ Data }) {
  const [articles, setArticles] = useState([]);
  const [loadedCount, setLoadedCount] = useState(4); 
  
  useEffect(() => {
    const fetchArticles = async () => {
      const fetchedArticles = await Promise.all(
        Data.items.slice(0, loadedCount).map(async item => {
          const response = await fetch(`https://gateway.scan-interfax.ru/api/v1/documents`, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ ids: [item.encodedId] }) 
          });
          return await response.json();
        })
      );
      
      setArticles(fetchedArticles);
    };

    fetchArticles(); 

  }, [Data, loadedCount]); 

  const loadMoreArticles = () => {
    setLoadedCount(prevCount => prevCount + 4);
  };
  
  return (
    <section className="articles">
      <div className="container">
        <div className="articles__header"></div>
        <div className="articles__card">
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              date={article[0].ok.issueDate}
              info={article[0].ok.source.name}
              url={article[0].ok.url}
              title={article[0].ok.title.text}
              description={article[0].ok.attributes}
              img={article.img} 
              text={article[0].ok.content.markup}
              btn={article[0].ok.url}
              footer={article[0].ok.attributes.wordCount}
            />
          ))}
        </div>
        {loadedCount < Data.items.length && (
          <div className="articles__btn-wrapper">
            <button onClick={loadMoreArticles} className="articles__btn">
              Показать еще
            </button>
          </div>
        )}
      </div>
    </section>
  );
  }
