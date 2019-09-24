import React from "react";
import "./about.scss";

const About = () => (
    <div className='about-block'>
        <h1 className='title-h1'>Обо мне</h1>
        <div className='contacts-links'>
            <a href='' className='contacts-link' target="_blank" rel="noopener noreferrer">VK</a>
            <a href='' className='contacts-link' target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href='' className='contacts-link' target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href='' className='contacts-link' target="_blank" rel="noopener noreferrer">Skype</a>
            <a href='' className='contacts-link' target="_blank" rel="noopener noreferrer">Email</a>
        </div>
        <p>Вёрстка красивых и современных веб-страниц с полной адаптивностью под любые устройства и полноценной интерактивностью как из дизайн-макета, так и без него.</p>
        <h2>Мои навыки:</h2>
        <p>HTML - HTML5, микроразметка</p>
        <p>CSS - CSS3, SCSS, Flexbox, CSS Grid</p>
        <p>... - Bootstrap 4, jQuery</p>
        <p>Javascript - ES6, </p>
        <p>React - Redux, MobX</p>
        <p>node.js, Npm, Gulp, Babel, Webpack, Git</p>
        <p>UI/UX design - Photoshop, Figma, Avocode, SVG</p>

    </div>
)

export default About;
