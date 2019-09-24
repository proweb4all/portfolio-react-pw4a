import React, {Component} from 'react';
import './status-filter.css';

export default class StatusFilter extends Component {
    // checks = this.props;
    // [
    //     {name: 'design', label: 'Дизайн', check: false},
    //     // {name: 'htmlscc', label: 'HTML+CSS', check: true},
    //     {name: 'javascript', label: 'Javascript', check: false},
    //     {name: 'jquery', label: 'jQuery', check: false},
    //     {name: 'react', label: 'React', check: false},
    //     {name: 'ajax', label: 'AJAX', check: false}
    // ]

    render() {
        const { checks, onCheckToggle } = this.props;
        const checkList = checks.map(({name, label, check}) => {
                // const active = filter === name;
            //const clazz = active ? 'btn-info' : 'btn-outline-info';
            return (
                <label className='check-label'>
                    <input 
                        type='checkbox'
                        checked={check} 
                        className='check-input' //{`btn ${clazz}`}
                        key={name}
                        onClick={() => onCheckToggle(name)}
                    />
                    {label}
                </label>
            )
        })
        return (
            <div className='checks-block'>
                {checkList}
            </div>
        )
    }
}
