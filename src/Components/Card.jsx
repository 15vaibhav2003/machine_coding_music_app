import React from 'react'

const card = () => {
  return (
    <div>
        <div className='w-64 h-20 bg-white rounded'>
          <div className='h-14 w-20 bg-red-500'></div>
        </div>
        <button className='   w-32 h-8 bg-orange-400 rounded-full -translate-y-5 translate-x-14 text-white text-xs'>Add To Favourites</button>
       
    </div>
  )
}

export default card