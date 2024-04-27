import LogoFooter from '../img/logo_footer.png'
import './footer.css'

export default function Futer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__row">
          <div className="footer__logo">
            <img src={LogoFooter} alt = "Logo" />
          </div>
          <div className="footer__text">
            <div className="footer__text-adress">
              <p>г. Москва, Цветной б-р, 40</p>
              <p>+7 495 771 21 11</p>
              <p>info@skan.ru</p>                                           
            </div>
            <div className="footer__text-copyright">Copyright. 2022</div>
          </div>
        </div>
      </div>
    </footer>
  )
}