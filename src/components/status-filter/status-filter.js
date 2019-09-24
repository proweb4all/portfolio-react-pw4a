import React, {Component} from 'react';
import './status-filter.css';

const StatusFilter = ({ checks, onCheckToggle }) => {
    const checkList = checks.map(({ label, check }) => {
        return (
            <label className='check-label'>
                <input 
                    type='checkbox'
                    checked={check} 
                    className='check-input'
                    key={label}
                    onClick={() => onCheckToggle(label)}
                />
                {label}
            </label>
        )
    });
    return (
        <div className='checks-block'>
            {checkList}
        </div>
    );
}

export default StatusFilter;