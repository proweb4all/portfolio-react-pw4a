import React from 'react';
import PropTypes from 'prop-types';
import './status-filter.css';

const StatusFilter = ({ checks, onCheckToggle }) => {
    const checkList = checks.map(({ label, check }) => {
        return (
            <label className='check-label' key={label}>
                <input 
                    type='checkbox'
                    checked={check} 
                    className='check-input'
                    //key={label}
                    onClick={() => onCheckToggle(label)}
                    onChange={() => {}}
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

StatusFilter.propTypes = {
    checks: PropTypes.array,
    onCheckToggle: PropTypes.func,
}
  
StatusFilter.defaultProps = {
    checks: [],
    onCheckToggle: () => {},
}

export default StatusFilter;