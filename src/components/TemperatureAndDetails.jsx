import React from 'react'
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset
} from '@iconscout/react-unicons'

export default function TemperatureAndDetails() {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>Cloudy</p>
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img className='w-20' src="https://img.icons8.com/ios/50/000000/temperature.png" alt="temperature" />
        <p className="text-5xl">20°</p>
        <div className='flex flex-col space-y-2'>
          <div className='flex font-light text-sm items-center justify-center'>
            <UilTemperature size={18} className='mr-1' />
            Feels like
            <span className='font-medium ml-1'>18°</span>
          </div>
          <div className='flex font-light text-sm items-center justify-center'>
            <UilTear size={18} className='mr-1' />
            Humidity
            <span className='font-medium ml-1'>65%</span>
          </div>
          <div className='flex font-light text-sm items-center justify-center'>
            <UilWind size={18} className='mr-1' />
            Wind
            <span className='font-medium ml-1'>11 mph</span>
          </div>
        </div>
      </div>
      <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
        <UilSun size={18} />
        <p className='font-light'>
          Rise:
          <span className='font-medium ml-1'>6:00 AM</span>
        </p>
        <p className='font-light'>|</p>
        <UilSunset size={18} />
        <p className='font-light'>
          Set:
          <span className='font-medium ml-1'>6:00 AM</span>
        </p>
        <p className='font-light'>|</p>
        <UilArrowUp size={18} />
        <p className='font-light'>
          High:
          <span className='font-medium ml-1'>75°</span>
        </p>
        <p className='font-light'>|</p>
        <UilArrowDown size={18} />
        <p className='font-light'>
          Low:
          <span className='font-medium ml-1'>35°</span>
        </p>
      </div>
    </div>
  )
}
