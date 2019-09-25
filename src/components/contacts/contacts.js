import React from "react";
import PropTypes from 'prop-types';
import './contacts.scss';

const ContactLinks = ({outerClass}) => {
  const allStyle = `contacts-links ${outerClass}`;
  return (
    <div className={allStyle}>
      <a href='https://www.linkedin.com/in/yurytaratov/' className='contacts-link' target="_blank" rel="noopener noreferrer" title='Открыть профиль в LinkedIn'>LinkedIn</a>
      <a href='https://github.com/proweb4all' className='contacts-link' target="_blank" rel="noopener noreferrer" title='Открыть GitHub репозиторий'>GitHub</a>
      <a href='skype:rustich.ruwolf?add' className='contacts-link' target="_blank" rel="noopener noreferrer" title='Связаться в Skype'>Skype</a>
      <a href='https://vk.com/yurytaratov' className='contacts-link' target="_blank" rel="noopener noreferrer" title='Открыть профиль в ВКонтакте'>VK</a>
      <a href='mailto:yurytaratov@yandex.ru' className='contacts-link' target="_blank" rel="noopener noreferrer" title='Написать на email'>Email</a>
      <a href='tel:+79106436216' className='contacts-link' target="_blank" rel="noopener noreferrer" title='Позвонить'>Phone</a>
    </div>
  )
}

ContactLinks.propTypes = {
  outerClass: PropTypes.string,
}

ContactLinks.defaultProps = {
  outerClass: '',
}

export default ContactLinks;