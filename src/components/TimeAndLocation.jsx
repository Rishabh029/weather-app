import React from 'react'
import { formatToLocalTime } from '../Services/weatherService'

function TimeAndLocation({weather : {dt, timezone , name ,country}}) {
  //console.log(timezone);
  return (
    <div>
    <div className='item-center justify-center flex my-6'>
      <p className='text-white text-xl font-extralight'>
        {formatToLocalTime(dt)}
      </p>
    </div>
    <div>
      <p className=' text-white justify-center items-center flex text-3xl font-bold'>{`${name} , ${country}`}</p>
    </div>
    </div>
  )
}

export default TimeAndLocation