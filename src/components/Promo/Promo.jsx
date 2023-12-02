import './promo.css'
import promoImage from '../img/2398 1.png';

export default function Promo() {
  return (
    <div className="promo">
        <div className="container">
            <div className="promo__content">
                <div className="promo__text">
                    <div className="promo__title">сервис по поиску публикаци о компании <p /> по его ИНН</div>
                    <div className="promo__desc">Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</div>
                    <div className="promo__btn-wrapper">
                        <a href='#!' className="promo__btn">
                        Запросить данные
                        </a>

                    </div>               
                </div>
                <div className="promo__image">
                    <img src={promoImage} alt="Img"></img>
                </div>

            </div>


        </div>
    </div>
  );
}

