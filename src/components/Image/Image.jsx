import React, { useState, useEffect } from 'react';
import desktopImage from '../img/Group 14.png';
import mobileImage from '../img/Group 1.png';

export default function Image() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='container'>
        <div className="image">
        <img src={windowWidth <= 575 ? mobileImage : desktopImage} alt="Image" />
        </div>
    </div>
  )
}
