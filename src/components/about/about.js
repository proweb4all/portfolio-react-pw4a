import React from "react";
import ContactLinks from "../contacts";
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
            <p className='about__p'>HTML5, CSS3, SCSS, Flexbox, CSS Grid</p>
            <p className='about__p'>Bootstrap 4, БЭМ, SVG</p>
            <p className='about__p'>Javascript, jQuery, React (Redux, MobX)</p>
            <p className='about__p'>Npm, Bower, Gulp, Webpack, Git</p>
            <p className='about__p'>UI/UX design, Photoshop, Figma, Avocode, Zeplin</p>
            <h3 className='about__h3'>Мои контакты:</h3>
            <ContactLinks />
        </div>
    </div>
)

export default About;
