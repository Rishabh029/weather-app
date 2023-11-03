import React, { useState } from 'react';
import './App.css';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './Services/weatherService';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [query, setQuery] = useState({ q: 'paris' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);


  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : 'current location.'

      toast.info("Fetching weather for " + message.charAt(0).toUpperCase() + message.slice(1))
      const data = await getFormattedWeatherData({ ...query, units }).then(
        (data) => {
          setWeather(data);

          toast.success(
            `Successfully fetched weather for  ${data.name}, ${data.country}.`
          )
          // console.log(data);

        }
      );
    }
    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if(!weather) return 'from-cyan-700 to-blue-800'
    const threshold = units === 'metric' ? 20 : 60
    if (weather.temp <= threshold)  return 'from-cyan-700 to-blue-800'

    return 'from-orange-600 to-red-900'
  }

  return (
    <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 ${formatBackground()}`} >
      <TopButtons setQuery ={setQuery}/>
      <Inputs setQuery ={setQuery} units={units} setUnits = {setUnits}/>
      {weather && (
        <div>
          <TimeAndLocation weather = {weather}/>
          <TemperatureAndDetails weather = {weather} />
          {/* <Forecast title='hourly forecast' /> */}
          {/* <Forecast title='Daily forecast' /> */}
        </div>
      )}

      <ToastContainer autoClose={5000} theme="dark" newestOnTop={true} />
    </div>
  );
}

export default App;
