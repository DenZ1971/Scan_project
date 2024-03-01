import './auth.css'
import Characters from '../img/Characters.png'
import FormAuth from '../FormAuth/FormAuth'

export default function Auth({onAuthentication}) {
  return (
    <div className="auth">
        <div className="container">
            <div className="content">
                <div className="content__left">
                    <div className="content__left-title">Для оформления подписки <p> 
на тариф, необходимо </p> авторизоваться.</div>
                    <div className="content__left-img">
                    <img src={Characters} alt = "ImageImage" />
                    </div>
                </div>
                <div className="content__right">
                    <div className="content__right-form">
                        <FormAuth onAuthentication={onAuthentication}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}