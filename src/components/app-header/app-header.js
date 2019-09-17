import React from 'react';
import { Link } from 'react-router-dom';
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
            <li><Link className='nav-item' to='/'>Главная</Link></li>
            <li><Link className='nav-item' to='/portfolio'>Портфолио</Link></li>
            <li><Link className='nav-item' to='/about'>Обо мне</Link></li>
        </ul>
    </header>
)


export default AppHeader;