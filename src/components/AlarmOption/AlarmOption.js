import React, { useContext } from "react";
import "./AlarmOption.css";
import { minutesNumber, hourNumber } from "../../func";
import useSelect from "../hooks/useSelect";
import { AlarmContext } from "../Context/ContextAlarm";

function AlarmOption() {
    const [hour, setHour] = useSelect("Hour");
    const [minutes, setMinutes] = useSelect("Minutes");
    const [amPmOption, setAmPmOption] = useSelect("Am-Pm");
    const { setAlarmTime, pauseAlarm, hasAlarm, setHasAlarm } =
        useContext(AlarmContext);

    const setAlarm = () => {
        if (hasAlarm) {
            pauseAlarm();
            setHasAlarm(false);
            return;
        }

        if (
            !hour.includes("Hour") &&
            !minutes.includes("Minutes") &&
            !amPmOption.includes("Am-Pm")
        ) {
            setHasAlarm(true);
            setAlarmTime(`${hour}:${minutes} ${amPmOption}`);
        }
    };

    return (
        <div className="option-Container">
            <div className={`wrapper-option ${hasAlarm && "disable"}`}>
                <select className=" p-2  cursor-pointer rounded-lg shadow-lg shadow-slate-400" {...setHour}>
                    <option disabled value="Hour">
                        Hour
                    </option>
                    {hourNumber.map((hour, index) => (
                        <option className="bg-blue-500" key={index} value={hour}>
                            {hour}
                        </option>
                    ))}
                </select>
                <select className=" p-2  cursor-pointer rounded-lg shadow-lg shadow-slate-400" {...setMinutes}>
                    <option className="bg-blue-500" disabled value="Minutes">
                        Minutes
                    </option>
                    {minutesNumber.map((minutes, index) => (
                        <option className="bg-blue-500" key={index} value={minutes}>
                            {minutes}
                        </option>
                    ))}
                </select>
                <select className=" p-2  cursor-pointer rounded-lg shadow-lg shadow-slate-400" {...setAmPmOption}>
                    <option className="bg-blue-500" disabled value="Am-Pm">
                        Am/Pm
                    </option>
                    <option className="bg-blue-500" value="AM">Am</option>
                    <option value="PM">Pm</option>
                </select>
            </div>
            <button
                onClick={setAlarm}
                className={`setAlarm-btn w-36 p-3 text-white rounded-md my-5 bg-blue-600 ${hasAlarm && "play"}`}
            >
                {hasAlarm ? "Clear Alarm" : "Set Alarm"}
            </button>
        </div>
    );
}

export default AlarmOption;
