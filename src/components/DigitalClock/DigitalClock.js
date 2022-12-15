import React, { useContext, useState } from 'react';
import { AlarmContext } from "../../components/Context/ContextAlarm";


const DigitalClock = () => {
    const { dayNow, monthNow, yearNow } =
        useContext(AlarmContext);

    const time = new Date().toLocaleTimeString();

    const [currentTime, setCurrentTime] = useState(time)

    const updateTime = () => {
        const time = new Date().toLocaleTimeString();
        setCurrentTime(time)
    }
    setInterval(updateTime, 1000)


    return (
        <div>
            <h1 className='text-4xl text-center font-bold text-gray-900 mt-20 mb-10'>{currentTime}</h1>

            <div className="text-center my-5 text-white text-xl">
                <span>{`${dayNow} `}</span>
                <span>{`${monthNow} , `}</span>
                <span>{yearNow}</span>
            </div>
        </div>


    );
};

export default DigitalClock;