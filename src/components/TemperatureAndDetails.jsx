import React from 'react'
import { UilTemperature, UilTear , UilWind  , UilSun , UilSunset } from '@iconscout/react-unicons'
import { iconUrlFromCode } from '../Services/weatherService'

function TemperatureAndDetails({weather : {details , icon ,temp , temp_min ,temp_max , sunrise ,sunset ,speed , humidity  , feels_like }}) {
  return (
    <div>
      <div className=' flex item-center justify-center py-6 text-xl text-cyan-300'>
        <p>{details}</p>

      </div>
      <div className=' flex flex-row items-center justify-between text-white py-3 '>
        <img src={iconUrlFromCode(icon)} alt="" className=' w-20' />
        <p className=' text-5xl'>{temp.toFixed()}°</p>
        <div className='flex flex-col space-y-2'>
          <div className='flex font-light text-sm items-center justify-center'>
            <UilTemperature className="mr-1" size={18}></UilTemperature>
            Real felt :
            <span className=' font-medium ml-1'>{feels_like.toFixed()}°</span>
          </div>
          <div className='flex font-light text-sm items-center justify-center'>
            <UilTear className="mr-1" size={18}></UilTear>
            Humidity :
            <span className=' font-medium ml-1'>{humidity}%</span>
          </div>
          <div className='flex font-light text-sm items-center justify-center'>
            <UilWind className="mr-1" size={18}></UilWind>
            Wind :
            <span className=' font-medium ml-1'>{speed.toFixed()} km/h</span>
          </div>
        </div>
      </div>
      <div className=' flex flex-row items-center justify-center text-white space-x-2 text-sm py-3'>
        {/* <UilSun></UilSun>
        <p className=' font-light'>
          Rise :<span className='font-medium ml-1'>{sunrise} AM</span>
        </p>
        <p className=' font-light'>|</p>
        <UilSunset></UilSunset>
        <p className=' font-light'>
          Set :<span className='font-medium ml-1'>{sunset} PM</span>
        </p> */
        /* <p className=' font-light'>|</p> */}
        <UilSun></UilSun>
        <p className=' font-light'>
          High :<span className='font-medium ml-1'>{temp_max.toFixed()}°</span>
        </p>
        <p className=' font-light'>|</p>
        <UilSun></UilSun>
        <p className=' font-light'>
          Low :<span className='font-medium ml-1'>{temp_min.toFixed()}°</span>
        </p>
      </div>
      
    </div>
  )
}

export default TemperatureAndDetails