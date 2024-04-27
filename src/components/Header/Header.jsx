import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import Logo from '../img/logo_header.png';
import Rect from '../img/Rectangle 6.png';
import avatar from '../img/—Pngtree—businessman user avatar wearing suit_8385663.png';
import Icon from '../img/Group 5.png';
import './header.css'
import axios from 'axios';

export default function Header() {
  const [userData, setUserData] = useState(null); 
  const location = useLocation();
  
  useEffect(() => {
    const fetchUserDataFromServer = async () => {
      try {
        const response = await axios.get('https://gateway.scan-interfax.ru/api/v1/account/info', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}` 
          }
        });

        setUserData(response.data);

        if (response.data && response.data.eventFiltersInfo) {
          const { eventFiltersInfo } = response.data;
          console.log('Used company count:', eventFiltersInfo.usedCompanyCount);
          console.log('Company limit:', eventFiltersInfo.companyLimit);
        } else {
          console.log('Unexpected response format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserDataFromServer();
    
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('expire');
    setUserData(null);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };
  
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__row'>
          <div className='header__logo'>
            <img src={Logo} alt="Logo" />
          </div>
          <nav className={`header__navbar ${isOpen ? 'show' : ''}`}>
            <div className='header__navbar-list'>
              <ul>
                <li><a className='header__navbar-text' href='/' onClick={handleCloseMenu}>Главная</a></li>
                <li><a className='header__navbar-text' href='#s' onClick={handleCloseMenu}>Тарифы</a></li>
                <li><a className='header__navbar-text' href='#s' onClick={handleCloseMenu}>FAQ</a></li>
                {userData ? (
                  <li><a className='header__navbar-text-mobile' href='#s' onClick={() => { handleCloseMenu(); handleLogout(); }} >Выход</a></li>
                ): (
                  <>
                    <li><Link to="/auth">
                    <button className='header__login-button header__login-button-mobile'onClick={handleCloseMenu}>Войти</button>
                    </Link></li>
                    <li><a className='header__navbar-text-mobile' href='#s'onClick={handleCloseMenu}>Зарегистрироваться</a></li>
                </>
                )}
              </ul>
            </div>
          </nav>
          <div className='header__user-info'>
            {userData ? (
            <div className='header__user-info-data'>
              <div className="header__user-info-status">
                <div className="header__user-info-column">
                  <div className='header__user-info-status-text'>
                    <span className='header__user-info-status-spend'>Использовано компаний  <span className='header__user-info-status-spend-span'>{userData.eventFiltersInfo.usedCompanyCount}</span></span>
                    <span className='header__user-info-status-limit'>Лимит по компаниям  <span className='header__user-info-status-limit-span'>{userData.eventFiltersInfo.companyLimit}</span></span>
                  </div>
                </div>
                <div className="header__user-info-column">
                  <span className='header__user-info-name'>Алексей А.</span>
                  <a className='header__logout-text' href='/' onClick={handleLogout}>Выйти</a>
                </div>
              </div>
              <img className='header__user-info-avatar' src={avatar} alt='User Avatar' />
            </div>  
            ) : (
              <div className='header__user-info-placeholder'>
                <a className='header__signin-text' href='#s'>Зарегистрироваться</a>
                <img className='header__rect' src={Rect} alt='I' />
                <Link to="/auth">
                  <button className='header__login-button'>Войти</button>
                </Link>
              </div>
            )}
          </div>
          <button className='header__menu-button' onClick={() => setIsOpen(!isOpen)}>
          <img src={Icon} alt="Menu Icon" />
          </button>
        </div>
      </div>  
    </header>
  );
}
