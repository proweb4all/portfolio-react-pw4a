import React from "react";
import PropTypes from 'prop-types';
import './contacts.scss';

const ContactLinks = ({outerClass}) => {
  const allStyle = `contacts-links ${outerClass}`;
  return (
    <>
      <div className={allStyle}>
        <a href='https://www.linkedin.com/in/yurytaratov/' className='contacts-link icon-linkedin' target="_blank" rel="noopener noreferrer" title='Открыть профиль в LinkedIn'></a>
        <a href='https://github.com/proweb4all' className='contacts-link icon-github' target="_blank" rel="noopener noreferrer" title='Открыть GitHub репозиторий'></a>
        <a href='skype:rustich.ruwolf?add' className='contacts-link icon-skype' target="_blank" rel="noopener noreferrer" title='Связаться в Skype'></a>
        <a href='https://vk.com/yurytaratov' className='contacts-link icon-vk' target="_blank" rel="noopener noreferrer" title='Открыть профиль в ВКонтакте'></a>
        <a href='https://t.me/Yury_PW4A' className='contacts-link icon-telegram' target="_blank" rel="noopener noreferrer" title='Связаться в Telegram'></a>
        <a href='mailto:yurytaratov@yandex.ru' className='contacts-link icon-mail' target="_blank" rel="noopener noreferrer" title='Написать на email'></a>
        <a href='tel:+79106436216' className='contacts-link icon-phone' target="_blank" rel="noopener noreferrer" title='Позвонить'></a>
      </div>
    </>
  )
}

ContactLinks.propTypes = {
  outerClass: PropTypes.string,
}

ContactLinks.defaultProps = {
  outerClass: '',
}

export default ContactLinks;