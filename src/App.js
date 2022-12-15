
import './App.css';
import DigitalClock from './components/DigitalClock/DigitalClock';
import AlarmOption from './components/AlarmOption/AlarmOption';
import ContextAlarm from './components/Context/ContextAlarm';

function App() {
  return (
    <div className=" bg-sky-500 w-96 mx-auto p-5 my-10 shadow-lg shadow-sky-500 rounded-md">
      <ContextAlarm>
        <DigitalClock></DigitalClock>
        <AlarmOption></AlarmOption>
      </ContextAlarm>
    </div>
  );
}

export default App;
