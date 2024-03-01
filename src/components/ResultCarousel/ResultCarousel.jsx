import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {FreeMode, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './ResultCarousel.css';
import { useState } from 'react';





// const data = [
//   {
//     id: 1,
//     date: '01.01.2022',
//     total: '5',
//     risks: '0',
//   },
//   {
//     id: 2,
//     date: '01.01.2022',
//     total: '5',
//     risks: '0',
//   },
//   {
//     id: 3,
//     date: '01.01.2022',
//     total: '5',
//     risks: '0',
//   },
//   {
//     id: 4,
//     date: '01.01.2022',
//     total: '5',
//     risks: '0',
//   },
//   {
//     id: 5,
//     date: '01.01.2022',
//     total: '5',
//     risks: '0',
//   },
//   {
//     id: 6,
//     date: '01.01.2022',
//     total: '5',
//     risks: '0',
//   },
//   {
//     id: 7,
//     date: '01.01.2022',
//     total: '5',
//     risks: '0',
//   },
//   {
//     id: 8,
//     date: '01.01.2022',
//     total: '5',
//     risks: '0',
//   },
//   {
//     id: 9,
//     date: '01.01.2022',
//     total: '5',
//     risks: '0',
//   },
//   {
//     id: 10,
//     date: '01.01.2022',
//     total: '5',
//     risks: '0',
//   },
//   {
//     id: 11,
//     date: '01.01.2022',
//     total: '5',
//     risks: '0',
//   },
//   {
//     id: 12,
//     date: '01.01.2022',
//     total: '5',
//     risks: '0',
//   },
//   {
//     id: 13,
//     date: '01.01.2022',
//     total: '5',
//     risks: '0',
//   },
//   {
//     id: 14,
//     date: '01.01.2022',
//     total: '5',
//     risks: '0',
//   },
//   {
//     id: 15,
//     date: '01.01.2022',
//     total: '5',
//     risks: '0',
//   },
//   {
//     id: 16,
//     date: '01.01.2022',
//     total: '5',
//     risks: '0',
//   },
//   {
//     id: 17,
//     date: '01.01.2022',
//     total: '5',
//     risks: '0',
//   },
//   {
//     id: 18,
//     date: '01.01.2022',
//     total: '5',
//     risks: '0',
//   },
//   {
//     id: 19,
//     date: '01.01.2022',
//     total: '5',
//     risks: '0',
//   },
//   {
//     id: 20,
//     date: '01.01.2022',
//     total: '5',
//     risks: '0',
//   },
// ]

export default function Carousel({searchData}) {

  // const transformedData = searchData.map((item, index) => ({
    
  //   date: `${item.histogramType === 'totalDocuments'}` && `${item.data[0].date}`,
  //   value: `${item.data[0].value}`,
  //   risk: `${item.data[0].value}`
  // }));
  let transformedData = [];
  for (let i = 1; i < searchData.length; i++) {
    transformedData.push({
      date: `${searchData[i-1].data[i-1].date}`,
      value: `${searchData[i-1].data[i-1].value}`,
      risk: `${searchData[i].data[i-1].value}`
    })
  }
 

  console.log(transformedData);

  
  
  console.log('Search data in ResultCarousel:', searchData);
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
      console.log(item, index),

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