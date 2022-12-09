import React, { useState } from 'react';

const Top = () => {
    const [show, setShow] = useState(false)

    function clickHandle(){
        setShow(!show)
    }
    return (
        <div className='heading'>
            <h1><i class="fa-solid fa-dumbbell"></i> Ultra Active Club</h1>
            <button className={show && 'show'} onClick={() => clickHandle()}><i class="fa-solid fa-bars"></i></button>
            <h3>Select today’s exercise</h3>
        </div>
        
    );
};

export default Top;