import Promo from "../Promo/Promo"
import Carousel from "../Carousel/Carousel"
import Image from "../Image/Image"
import Tarifes from "../Tarifes/Tarifes"
import { useState } from 'react';
import FormAuth from "../FormAuth/FormAuth"


export default function Home() {
  
  

  return (
    <>
          <Promo /> 
          <Carousel />
          <Image />
          <Tarifes />
        
    </>
  )
}