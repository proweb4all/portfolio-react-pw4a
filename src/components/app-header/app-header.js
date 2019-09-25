import React from 'react';
import { NavLink } from 'react-router-dom';
import './app-header.scss';

const AppHeader = () => (
    <header className='app-header'>
        <a href='http://portfolio.proweb4all.ru/' className='user'>
            <img src='img/ya.jpeg'  className='user__img' alt='Юрий Таратов'/>
            <div className='user__descr'>
                <h2 className='user__h2'>Юрий Таратов</h2>
                <p className='user__p'>frontend разработчик</p>
            </div>
        </a>
        <ul className='nav'>
            <li><NavLink exact className='nav-item' to='/'>Главная</NavLink></li>
            <li><NavLink className='nav-item' to='/about'>Обо мне</NavLink></li>
            <li><NavLink className='nav-item' to='/portfolio'>Портфолио</NavLink></li>
        </ul>
    </header>
)


export default AppHeader;