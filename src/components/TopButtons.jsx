import React from 'react'

function TopButtons() {
  const cities = [
    {
      id: 1,
      title: 'London',
    },
    {
      id: 2,
      title: 'Paris',
    },
    {
      id: 3,
      title: 'New York',
    },
    {
      id: 4,
      title: 'Tokyo',
    },
    {
      id: 5,
      title: 'Moscow',
    },
  ]
  return (
    <div className='flex items-center justify-around my-6'>
      {cities.map((city) => (
        <button
          key={city.id}
          className='text-lg font-large text-white'
        >
          {city.title}
        </button>
      ))}
    </div>
  )
}

export default TopButtons