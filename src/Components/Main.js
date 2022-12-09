import React, { useState } from 'react';
import Footer from './Footer/Footer';
import Saidebar from './Sidebar/Saidebar';
import Card from './Top/Card';
import Top from './Top/Top';

const Main = () => {
    const [totalTime, setTotalTime] = useState(0)
    return (
        <div className='fullBody'>
            <div className='main'>
                <div className='left'>
                    <Top />
                    <Card setTotalTime={setTotalTime} />
                </div>
                <div className='right'>
                    <Saidebar totalTime={totalTime} />
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Main;