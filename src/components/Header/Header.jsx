import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Logo from '../img/logo_header.png';
import Rect from '../img/Rectangle 6.png';
import './header.css'
import axios from 'axios';

// export default function Header() {
//   return (
//     <header className= 'header'>
//       <div className='container'>
//         <div className='header__row'>
//           <div className='header__logo'>
//             <img src={Logo} alt = "Logo" />
//           </div>
//           <nav className='header__navbar'>
//             <ul >
//               <li ><a className='header__navbar-text' href='#s'>Home</a></li>
//               <li><a className='header__navbar-text' href='#s'>Tarif</a></li>
//               <li><a className='header__navbar-text' href='#s'>FAQ</a></li>
//             </ul>
            
//           </nav>
//           <div className='header__signin'>
//               <a className='header__signin-text' href='#s'>SignIn</a>
//               <img className='header__rect' src={Rect} alt = "I" />
//               <Link to="/auth">
//               <button className='header__login-button'>Login</button>
//               </Link>
//             </div>
//           </div>
//         </div> 
//     </header>
//   )
// }
 


export default function Header() {
  const [userData, setUserData] = useState(null); // Состояние для данных пользователя

  useEffect(() => {
    // Функция для получения данных о пользователе после авторизации
    const fetchUserDataFromServer = async () => {
      try {
        // Выполняем запрос на сервер для получения данных пользователя
        const response = await axios.get('https://gateway.scan-interfax.ru/api/v1/account/info', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}` // Получаем токен из localStorage
          }
        });

        // Сохраняем данные пользователя в состоянии компонента
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    // Вызываем функцию получения данных о пользователе при монтировании компонента
    fetchUserDataFromServer();
    console.log(userData);
  }, []);

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__row'>
          <div className='header__logo'>
            <img src={Logo} alt="Logo" />
          </div>
          <nav className='header__navbar'>
            <ul>
              <li><a className='header__navbar-text' href='#s'>Home</a></li>
              <li><a className='header__navbar-text' href='#s'>Tarif</a></li>
              <li><a className='header__navbar-text' href='#s'>FAQ</a></li>
            </ul>
          </nav>
          <div className='header__user-info'>
            {userData ? (
              <div className='header__user-info-data'>
                <div className="header__user-info-status">
                  <span className='header__user-info-status-spend'>{userData.usedCompanyCount}</span>
                  <span className='header__user-info-status-limit'>{userData.companyLimit}</span>

                </div>
                <img className='header__user-info-avatar' src={userData.eventFiltersInfo.avatar} alt='User Avatar' />
                <span className='header__user-info-name'>{userData.name}</span>
              </div>
            ) : (
              <div className='header__user-info-placeholder'>
                <a className='header__signin-text' href='#s'>SignIn</a>
                <img className='header__rect' src={Rect} alt='I' />
                <Link to="/auth">
                  <button className='header__login-button'>Login</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}