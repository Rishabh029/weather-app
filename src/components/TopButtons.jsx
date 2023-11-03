import React ,{useState} from 'react'

function TopButtons({setQuery}) {
    const cities =[
        {
            id : 1,
            title : 'London'
        },
        {
            id : 2,
            title : 'Mumbai'
        }   ,
             {
            id : 3,
            title : 'New York'
        },
        {
            id : 4,
            title : 'Delhi'
        },
        {
            id : 5,
            title : 'Paris'
        }

    ]
  return (
    <div className='flex items-center justify-around my-6'>
        {cities.map((city)=>
        <button key={city.id} className='text-lg text-white font-medium ' onClick={() => setQuery({q: city.title})}>{city.title}</button>)}
    </div>
  )
}

export default TopButtons