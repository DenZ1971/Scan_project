import Card from '../Card/Card';
import './tarifes.css'
import lamp from '../img/Beginer.svg'
import arrow from '../img/Pro.png'
import pc from '../img/Business.png'




export default function Tarifes() {
  return (
    <section className="tarifes">
        <div className="container">
            <div className="tarifes__title">наши тарифы</div>
            <div className="tarifes__header"></div>
            <div className="tarifes__card">
                <Card title='Beginer' description='Для небольшого исследования' img={lamp}
                price='799 ₽' fullprice='1200 ₽' pricedesc='или 150 ₽/мес. при рассрочке на 24 мес'
                tarifdesc1='Безлимитная история запросов' tarifdesc2='Безопасная сделка' tarifdesc3='Поддержка 24/7' />
                <Card title='Pro' description='Для HR и фрилансеров' img={arrow}
                price='1299 ₽' fullprice='2600 ₽' pricedesc='или 279 ₽/мес. при рассрочке на 24 мес'
                tarifdesc1='Все пункты тарифа Beginner' tarifdesc2='Экспорт истории' tarifdesc3='Рекомендации по приоритетам'/>
                <Card title='Busines' description='Для корпоративных клиентов' img={pc}
                price='2379 ₽' fullprice='2700 ₽' pricedesc=''
                tarifdesc1='Все пункты тарифа Pro' tarifdesc2='Безлимитное количество запросов' tarifdesc3='Приоритетная поддержка'/>
                
            </div>



        </div>
    </section>

  );
}