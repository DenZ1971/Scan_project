import './Summary.css'
import summaryImage from '../img/image 33.png';

export default function Promo({searchData}) {

    let summary = [];
    for (let i = 1; i < searchData.length; i++) {
        summary.push(`${searchData[i-1].data[i-1].value}`
      )
    }

    console.log('Summary:', summary);

    var sum = summary.reduce(function(a, b){
      return a + b;
    })
    



  return (
    <div className="summary">
        <div className="container">
            <div className="summary__content">
                <div className="summary__text">
                    <div className="summary__title">Ищем. Скоро будут результаты</div>
                    <div className="summary__desc">Поиск может занять некоторое время, просим сохранять терпение.</div>
                    <div className="summary__title_2">Общая сводка</div>
                    <div className="summary__desc_2">Найдено {sum} вариантов</div>              
                </div>

                <div className="summary__image">
                    <img src={summaryImage} alt="Img"></img>
                </div>

            </div>


        </div>
    </div>
  );
}