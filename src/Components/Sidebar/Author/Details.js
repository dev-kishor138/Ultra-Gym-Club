import React from 'react';

const Details = () => {
    return (
        <div className='details'>
            <div className='box'>
                <h3>52<span>kg</span></h3>
                <p>Weight</p>
            </div>
            <div className='box'>
                <h3>5.4<span>inch</span></h3>
                <p>Height</p>
            </div>
            <div className='box'>
                <h3>20<span>yrs</span></h3>
                <p>Age</p>
            </div>
        </div>
    );
};

export default Details;