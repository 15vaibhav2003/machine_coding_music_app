import React from 'react'

const card = () => {
  return (
    <div>
        <div className='w-64 h-20 bg-white rounded-md'>
            <img  className='h-14 w-20 bg-zinc-300 rounded translate-y-2 translate-x-2' src="casette.jpg" alt="" />
           <div className='translate-x-28 -translate-y-12'>
           <h1 className='text-xl'>Song Name</h1>
           <h3 className='text-xm'>Artist Name</h3>
           </div>
        </div>
        <button className='   w-32 h-8 bg-orange-400 rounded-full -translate-y-3 translate-x-14 text-white text-xs'>Add To Favourites</button>
    </div>
  )
}

export default card