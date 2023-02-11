import React from 'react'

function Forecast({ title }) {
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className='text-white font-medium uppercase'>
          {title}
        </p>
      </div>
      <hr className='my-2' />
      <div className='flex flex-row items-center justify-between text-white'>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-sm'>4:30PM</p>
          <img className='w-12 my-1' src="https://img.icons8.com/ios/50/000000/temperature.png" alt="temperature" />
          <p className='text-sm'>32°</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-sm'>4:30PM</p>
          <img className='w-12 my-1' src="https://img.icons8.com/ios/50/000000/temperature.png" alt="temperature" />
          <p className='text-sm'>32°</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-sm'>4:30PM</p>
          <img className='w-12 my-1' src="https://img.icons8.com/ios/50/000000/temperature.png" alt="temperature" />
          <p className='text-sm'>32°</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-sm'>4:30PM</p>
          <img className='w-12 my-1' src="https://img.icons8.com/ios/50/000000/temperature.png" alt="temperature" />
          <p className='text-sm'>32°</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-sm'>4:30PM</p>
          <img className='w-12 my-1' src="https://img.icons8.com/ios/50/000000/temperature.png" alt="temperature" />
          <p className='text-sm'>32°</p>
        </div>
      </div>
    </div>
  )
}

export default Forecast