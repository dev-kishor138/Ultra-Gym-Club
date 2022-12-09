import React from 'react';

const Exercise = ({ totalTime }) => {
    return (
        <div className='exercise'>
            <h2>Exercise Details</h2>
            <div className='exercise-time'>
                <h4>Exercise Time</h4>
                <p>{totalTime}<span>seconds</span></p>
            </div>
            <div className='break-time'>
                <h4>Break Time</h4>
                <p>200<span>seconds</span></p>
            </div>
        </div>
    );
};

export default Exercise;