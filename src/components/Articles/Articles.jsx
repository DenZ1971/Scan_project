import { useEffect, useState } from 'react';
import ArticleCard from '../ArticleCard/ArticleCard';
import XMLParser from '../XMLParser/XNLParser';
import './Articles.css';

export default function Articles({ Data }) {
  const [articles, setArticles] = useState([]);
  const [loadedCount, setLoadedCount] = useState(4); // Начальное количество загруженных статей
  console.log('Articles:', Data);

  useEffect(() => {
    // Функция для загрузки статей
    const fetchArticles = async () => {
      const fetchedArticles = await Promise.all(
        // Запросы на сервер для каждой статьи
        Data.items.slice(0, loadedCount).map(async item => {
          const response = await fetch(`https://gateway.scan-interfax.ru/api/v1/documents`, {
            method: 'POST', // Используем метод POST
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ ids: [item.encodedId] }) // Отправляем тело запроса в формате JSON
          });
          return await response.json();
          
        })
      );
      
      setArticles(fetchedArticles);
      
    };

    fetchArticles(); // Загружаем начальные статьи

  }, [Data, loadedCount]); // Обновляем список статей при изменении loadedCount

  const loadMoreArticles = () => {
    // Увеличиваем количество загруженных статей на 4
    setLoadedCount(prevCount => prevCount + 4);
  };
  console.log(articles);

  

  
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
              img={article.img} // Assuming img is part of the article data
              text={article[0].ok.content.markup}
              btn={article[0].ok.url}
              footer={article[0].ok.attributes.wordCount}
            />
          ))}
        </div>
        {/* Показываем кнопку "Загрузить еще", если есть еще статьи для загрузки */}
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
        
      



// import ArticleCard from '../ArticleCard/ArticleCard';
// import './Articles.css'
// import SkillFactory from '../img/Снимок экрана 2022-09-24 в 20.20 1.png'
// import arrow from '../img/Pro.png'
// import pc from '../img/Business.png'




// export default function Articles({Data}) {



//   return (
//     <section className="articles">
//         <div className="container">
            
//             <div className="articles__header"></div>
//             <div className="articles__card">
//                 <ArticleCard date='13.09.2021' info='Комсомольская правда KP.RU' title='Скиллфэктори - лучшая онлайн-школа для будущих айтишниковeginer' description='Технические новости' img={SkillFactory}
//                 text='SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 
//                 4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, 
//                 Яндексе, Ozon и других топовых компаниях.

//                 Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. 
//                 Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к собеседованиям и 
//                 познакомиться с IT-рекрутерами.или 150 ₽/мес. при рассрочке на 24 мес'
//                 footer='2543 слова' />
//                 <ArticleCard date='13.09.2021' info='Комсомольская правда KP.RU' title='Скиллфэктори - лучшая онлайн-школа для будущих айтишниковeginer' description='Технические новости' img={SkillFactory}
//                 text='SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 
//                 4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, 
//                 Яндексе, Ozon и других топовых компаниях.

//                 Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. 
//                 Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к собеседованиям и 
//                 познакомиться с IT-рекрутерами.или 150 ₽/мес. при рассрочке на 24 мес'
//                 footer='2543 слова' />
                
//             </div>
//             <div className="articles__btn-wrapper">
//                         <a href='#!' className="articles__btn">
//                         Показать больше
//                         </a>

//                     </div>  





//         </div>
//     </section>

//   );
// }
        }
