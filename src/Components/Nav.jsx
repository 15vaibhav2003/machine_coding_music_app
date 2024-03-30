import React from 'react'

const Nav = () => {
  return (
    <div className=' flex justify-between px-10'>
        <h1 className='text-orange-400 font-bold text-xl'>Orange</h1>
        <button className='text-white h-10 w-24 font-bold bg-orange-400 rounded-full'>Favourites</button>
    </div>
  )
}

export default Nav