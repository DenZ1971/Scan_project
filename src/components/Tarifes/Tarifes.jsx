import Card from '../Card/Card';
import './tarifes.css'
import lamp from '../img/Beginer.svg'
import arrow from '../img/Pro.png'
import pc from '../img/Business.png'
import { useState, useEffect } from 'react';




export default function Tarifes() {
  const [Authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
      const token = localStorage.getItem('accessToken');
      setAuthenticated(!!token); 
    }, []); 


  return (
    <section className="tarifes">
        <div className="container">
            <div className="tarifes__title">наши тарифы</div>
            <div className="tarifes__header"></div>
            <div className="tarifes__card">
                {Authenticated ? <Card  title='Beginer' description='Для небольшого исследования' img={lamp}
                price='799 ₽' fullprice='1200 ₽' pricedesc='или 150 ₽/мес. при рассрочке на 24 мес'
                tarifdesc1='Безлимитная история запросов' tarifdesc2='Безопасная сделка' tarifdesc3='Поддержка 24/7' button='Перейти в личный кабинет'  backgroundColorcolor='#D2D2D2' padding='18px 40px 18px 40px' mobilePadding='10px 30px 10px 30px' border='2px solid #FFB64F'/> : <Card  title='Beginer' description='Для небольшого исследования' img={lamp}
                price='799 ₽' fullprice='1200 ₽' pricedesc='или 150 ₽/мес. при рассрочке на 24 мес'
                tarifdesc1='Безлимитная история запросов' tarifdesc2='Безопасная сделка' tarifdesc3='Поддержка 24/7' button='Подробнее' />}

                <Card color='#7CE3E1' title='Pro' description='Для HR и фрилансеров' img={arrow}
                price='1299 ₽' fullprice='2600 ₽' pricedesc='или 279 ₽/мес. при рассрочке на 24 мес'
                tarifdesc1='Все пункты тарифа Beginner' tarifdesc2='Экспорт истории' tarifdesc3='Рекомендации по приоритетам' button='Подробнее'/>

                <Card color='black' textcolor='white' title='Busines' description='Для корпоративных клиентов' img={pc}
                price='2379 ₽' fullprice='2700 ₽' pricedesc=''
                tarifdesc1='Все пункты тарифа Pro' tarifdesc2='Безлимитное количество запросов' tarifdesc3='Приоритетная поддержка' button='Подробнее'/>
                
            </div>



        </div>
    </section>

  );
}