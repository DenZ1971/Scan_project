import './image.css'
import desktopImage from '../img/Group 14.png';
import mobileImage from '../img/Group 1.png';

export default function Image() {
  return (
    <div className='container'>
        <div className="image">
        <img src={window.innerWidth <= 575 ? mobileImage : desktopImage} alt = "ImageImage" />
        </div>
    </div>
  )
}