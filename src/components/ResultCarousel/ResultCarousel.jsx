import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {FreeMode, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './ResultCarousel.css';


export default function Carousel({searchData}) {

  let transformedData = [];
  if (searchData && searchData.length > 0) {
    for (let i = 1; i < searchData.length; i++) {
      transformedData.push({
        date: new Date(searchData[i-1].data[i-1].date).toLocaleDateString('en-GB'),
        value: `${searchData[i-1].data[i-1].value}`,
        risk: `${searchData[i].data[i-1].value}`
    })
  }
  
  return (
    <div className='container'>
        <div className="resultcarousel__table">

            <div className='resultcarousel__title'>
                <div className='resultcarousel__data'>
                Период
                </div>
                 <div className='resultcarousel__data'>
                 Всего
                </div>
                <div className='resultcarousel__data'>
                Риски
                 </div>
            </div>
            <div className='resultcarousel__wrapper'>

    {transformedData && transformedData.length > 0 ? (
    <Swiper
    modules={[FreeMode, Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={3}
      navigation
      slideToClickedSlide={true}
      // loop={true}
      speed={800}
      breakpoints={{
        320:{
          slidesPerView:2,
        },
        800:{
          slidesPerView: 4,  
        },
        1080:{slidesPerView: 4,    
        },
      }}  
  >
    {transformedData.map((item, index) => (
      <SwiperSlide key={index} className='resultcarousel'>
        <span slot="wrapper-start"></span>
        <div className='resultcarousel__slide'>
        <div className='resultcarousel__data'>
          {item.date}
        </div> 
        <div className='resultcarousel__data'>
          {item.value}
        </div>
        <div className='resultcarousel__data'>
          {item.risk}
        </div>
        </div>
        <span slot="wrapper-end>"></span>
      </SwiperSlide>
    ))}
    
  </Swiper>
    ) : (
      <div>Ничего не найдено</div>
    )}
  </div>
  </div>
  </div>
  )
}
}