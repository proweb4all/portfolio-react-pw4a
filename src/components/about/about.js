import React from "react";
import "./about.scss";

const About = () => (
    <div id='style-scroll' className='about-scroll'>

        <div className='about__block'>
            <img className='about__photo' src='img/ya.jpeg' alt='Юрий Таратов'/>
            <h1 className='about__h1'>Будем знакомы, я&nbsp;Юрий&nbsp;Таратов</h1>
            <p className='about__p'>Занимаюсь созданием красивых и&nbsp;современных веб-страниц и&nbsp;веб-приложений с&nbsp;полной адаптивностью и&nbsp;полноценной интерактивностью под&nbsp;любые устройства как по&nbsp;дизайн-макету, так и&nbsp;без&nbsp;него.</p>
            <p className='about__p'>Имею 2&nbsp;высших образования, постоянно развиваю свои компетенции.</p>
            <p className='about__p'>Буду рад общению и&nbsp;любому взаимовыгодному сотрудничеству.</p>
            <h3 className='about__h3'>Мои навыки:</h3>
            <p className='about__p'>HTML5, CSS3, SCSS, Flexbox, Bootstrap 4, CSS Grid, SVG</p>
            <p className='about__p'>Javascript, jQuery, React (Redux, MobX)</p>
            <p className='about__p'>Npm, Babel, Gulp, Webpack, Git</p>
            <p className='about__p'>UI/UX design, Photoshop, Figma, Avocode</p>
            <h3 className='about__h3'>Мои контакты:</h3>
            <div className='contacts-links'>
                <a href='https://www.linkedin.com/in/yurytaratov/' className='contacts-link' target="_blank" rel="noopener noreferrer" title='Открыть профиль в LinkedIn'>LinkedIn</a>
                <a href='https://github.com/proweb4all' className='contacts-link' target="_blank" rel="noopener noreferrer" title='Открыть GitHub репозиторий'>GitHub</a>
                <a href='skype:rustich.ruwolf?add' className='contacts-link' target="_blank" rel="noopener noreferrer" title='Связаться в Skype'>Skype</a>
                <a href='https://vk.com/yurytaratov' className='contacts-link' target="_blank" rel="noopener noreferrer" title='Открыть профиль в ВКонтакте'>VK</a>
                <a href='mailto:yurytaratov@yandex.ru' className='contacts-link' target="_blank" rel="noopener noreferrer" title='Написать на email'>Email</a>
                <a href='tel:+79106436216' className='contacts-link' target="_blank" rel="noopener noreferrer" title='Позвонить'>Phone</a>
            </div>

        </div>
    </div>
)

export default About;
