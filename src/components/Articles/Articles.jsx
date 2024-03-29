import ArticleCard from '../ArticleCard/ArticleCard';
import './Articles.css'
import SkillFactory from '../img/Снимок экрана 2022-09-24 в 20.20 1.png'
import arrow from '../img/Pro.png'
import pc from '../img/Business.png'




export default function Articles() {
  return (
    <section className="articles">
        <div className="container">
            
            <div className="articles__header"></div>
            <div className="articles__card">
                <ArticleCard date='13.09.2021' info='Комсомольская правда KP.RU' title='Скиллфэктори - лучшая онлайн-школа для будущих айтишниковeginer' description='Технические новости' img={SkillFactory}
                text='SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 
                4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, 
                Яндексе, Ozon и других топовых компаниях.

                Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. 
                Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к собеседованиям и 
                познакомиться с IT-рекрутерами.или 150 ₽/мес. при рассрочке на 24 мес'
                footer='2543 слова' />
                <ArticleCard date='13.09.2021' info='Комсомольская правда KP.RU' title='Скиллфэктори - лучшая онлайн-школа для будущих айтишниковeginer' description='Технические новости' img={SkillFactory}
                text='SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 
                4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, 
                Яндексе, Ozon и других топовых компаниях.

                Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. 
                Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к собеседованиям и 
                познакомиться с IT-рекрутерами.или 150 ₽/мес. при рассрочке на 24 мес'
                footer='2543 слова' />
                
            </div>
            <div className="articles__btn-wrapper">
                        <a href='#!' className="articles__btn">
                        Показать больше
                        </a>

                    </div>  





        </div>
    </section>

  );
}