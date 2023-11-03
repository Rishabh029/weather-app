import React, { useState } from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
function Inputs({setQuery , units , setUnits}) {
  const [city, setCity] =useState("");

  const handleSearchClick = ()=> {
    if (city !== '') setQuery ({q : city});
  }

  const handleLocationClick = ()  => {
    if(navigator.geolocation){
      toast.info("Fetching the user current location")
      navigator.geolocation.getCurrentPosition((position) =>{
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        toast.success(
          "Location is fetched!!")
        setQuery({
          lat , lon
        });
      })
    }
  }

  const handleUnitsChange = (e)  => {
    const selectedUnit = e.currentTarget.name;
    if(units !== selectedUnit) setUnits(selectedUnit)
  }
  return (
    <div className='flex-row flex justify-center my-6'>
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input type="text" value ={city} onChange={(e) => setCity(e.currentTarget.value)} placeholder='Search for city.......' className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize' />
        <UilSearch size={25} className=' text-white cursor-pointer transition ease-out hover:scale-150' onClick = {handleSearchClick} />
        <UilLocationPoint size={25} onClick ={handleLocationClick} className=' text-white cursor-pointer transition ease-out hover:scale-150' />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center ">
        <button name='metric'className='text-xl text-white font-light' onClick={handleUnitsChange}>°C</button>
        <p className='text-white mx-1 text-xl'>|</p>
        <button name='imperial'className='text-xl text-white font-light' onClick={handleUnitsChange}>°F</button>
      </div>
    </div>
  )
}

export default Inputs