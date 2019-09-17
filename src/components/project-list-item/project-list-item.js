import React from 'react';
import PropTypes from 'prop-types';
import './project-list-item.scss';

const ProjectListItem = ({ title, description, year, technology, linkWeb, linkGithub }) => {
    const technologies = technology.join(", ");
    return (
        <div className='project-card'>
            <div>
                <h3 className='card-title'>{title}</h3>
                <div className='card-block-img'>
                    <img className='card-img' src="img/i.webp" alt=''/>
                    <div className='card-descr'>
                        <p className='card-descr-text'>{description}</p>
                    </div>
                </div>
                <p className='card-technology'><span className='card-text-label'>Технологии: </span>{technologies}</p>
            </div>
            <div>
                <div className='card-block-link'>
                    <a href={linkWeb} className='card-link' target="_blank" rel="noopener noreferrer">Перейти</a>
                    {linkGithub !== '' && <a href={linkGithub} className='card-link' target="_blank" rel="noopener noreferrer">Github</a>}
                </div>
                <p className='card-year'>
                    <span className='card-text-label'>Сделано: </span>
                    {year !== '' ? `${year}г.` : '??'}
                </p> 
            </div>
        </div>
    )
}
ProjectListItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    year: PropTypes.string,
    technology: PropTypes.array,
    linkWeb: PropTypes.string,
    linkGithub: PropTypes.string,
}
  
ProjectListItem.defaultProps = {
    title: '',
    description: '',
    year: '?? ',
    technology: [],
    linkWeb: '',
    linkGithub: '',
}

export default ProjectListItem;