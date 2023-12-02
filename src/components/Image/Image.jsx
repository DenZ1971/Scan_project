import './image.css'
import image from '../img/Group 14.png';

export default function Image() {
  return (
    <div className='container'>
        <div className="image">
            <img src={image} alt = "ImageImage" />
        </div>
    </div>
  )
}