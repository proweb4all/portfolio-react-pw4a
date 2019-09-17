import React from 'react';
import { NavLink } from 'react-router-dom';
import './app-header.scss';

const AppHeader = () => (
    <header className='app-header'>
        <div className='user'>
            <img src='ya.jpeg' alt='Юрий Таратов'/>
            <div>
                <h2 >Юрий Таратов</h2>
                <p>frontend разработчик</p>
            </div>
        </div>
        <ul className='nav'>
            <li><NavLink exact className='nav-item' to='/'>Главная</NavLink></li>
            <li><NavLink className='nav-item' to='/portfolio'>Портфолио</NavLink></li>
            <li><NavLink className='nav-item' to='/about'>Обо мне</NavLink></li>
        </ul>
    </header>
)


export default AppHeader;