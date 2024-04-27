import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {FreeMode, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './carousel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMagnifyingGlass, faShieldAlt } from '@fortawesome/free-solid-svg-icons'

const icon1 = faClock;
const icon2 = faMagnifyingGlass;
const icon3 = faShieldAlt;

const data = [
  {
    id: 1,
    icon: icon1,
    text: 'Высокая и оперативная скорость обработки заявки'
  },
  {
    id: 2,
    icon: icon2,
    text: 'Огромная комплексная база данных, обеспечивающая объективный ответ на запрос'
  },
  {
    id: 3,
    icon: icon3,
    text: 'Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству'
  },
  {
    id: 4,
    icon: icon1,
    text: 'Высокая и оперативная скорость обработки заявки'
  },
  {
    id: 5,
    icon: icon3,
    text: 'Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству'
  },
]

export default function Carousel() {
  return (
    <div className='container'>
      <div className="carousel__title">Почему именно мы</div>
      <div className='carousel__wrapper'>

    <Swiper
    modules={[FreeMode, Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={35}
      slidesPerView={3}
      navigation
      slideToClickedSlide={true}
      loop={true}
      speed={800}
      breakpoints={{
        320:{
          slidesPerView:1,
        },
        800:{
          slidesPerView: 2,
        },
        1080:{slidesPerView: 3,
        },
      }}
  >
    {data.map(card => (
      <SwiperSlide key={card.id} className='carousel'>
        <div className='carousel__img'>
        <FontAwesomeIcon icon={card.icon} style={{ width: '65px', height: '79px' }}/>
        </div>
        <div className='carousel__text'>
          {card.text}
        </div>
      </SwiperSlide>
    ))} 
  </Swiper>
  </div>
  </div>
  )
}