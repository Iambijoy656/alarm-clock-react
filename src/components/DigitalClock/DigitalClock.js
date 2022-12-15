import React, { useState } from 'react';

const DigitalClock = () => {

    const time = new Date().toLocaleTimeString();

    const [currentTime, setCurrentTime] = useState(time)


    return (
        <div>
            <h1 className='text-4xl font-bold text-gray-500 my-20'>{currentTime}</h1>

        </div>
    );
};

export default DigitalClock;