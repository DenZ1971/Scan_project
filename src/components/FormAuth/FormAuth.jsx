import { useForm } from 'react-hook-form';
import { useState } from 'react';
import './formauth.css';
import axios from 'axios';


export default function FormAuth() {
    const [errorMessage, setErrorMessage] = useState('');
    const {
        register,
        formState: {
            errors,
            isValid
    
        },
        handleSubmit,
        reset,
    } = useForm({
        mode: 'onBlur'
    });


    const onSubmit = async(data) => {
        try {
            const response = await axios.post('https://gateway.scan-interfax.ru/api/v1/account/login', data);
            console.log('Response:', response.data);
      
            // Далее обработка ответа от сервера, например:
            // Сохранение данных в localStorage
            localStorage.setItem('accessToken', response.data.accessToken);
            localStorage.setItem('expire', response.data.expire);
      
            reset(); // Очистка формы после успешной отправки
          } catch (error) {
            console.error('Error:', error);
            // Обработка ошибок
            setErrorMessage('Ошибка при отправке данных');
          }
        };
        
  
    return (
    <div className="formauth">
        <div className="formauth__header">
            <a className='formauth__header-textleft' href='#s'>Войти</a>
            <a className='formauth__header-textright' href='#s'>Зарегистрироваться</a>
        </div>
        <form className='formauth__form' onSubmit={handleSubmit(onSubmit)}>
            <div className='formauth__form-login'>
            <label>
            Логин или номер телефона:
            <input
                {...register('login', {
                    required: 'is required',
                //     pattern: {
                //         value:/^[a-z0-9._%+-]+@[a-z0-9._-]+\.[a-z]{2,4}$/ | /^[0-9+]/,

                //         message:'Введите корректные данные'
                // }



                })}
            />
            </label>
            <div>{errors?.login && <p className='formauth__error'>{errors?.login?.message || 'Error!'}</p>}</div>
            </div>
            <div className='formauth__form-login'>
            <label>
            Пароль:
            <input
                {...register('password', {
                    required: 'Введите корректные данные',
                })}
            />
            </label>
            </div>
            
            <input className='button' type='submit' value='Войти' disabled={!isValid}/>

            <a className='formauth__restorepasswod' href='#s'>Восстановить пароль</a>
        
        </form>
        


    </div>
  )
}