import React from 'react'
import Card from './Components/Card'

const App = () => {
  const data=[{Name:'Sanam re',Artist:'KK'},{Name:'Sanam re',Artist:'KK'},{Name:'Sanam re',Artist:'KK'},{Name:'Sanam re',Artist:'KK'},{Name:'Sanam re',Artist:'KK'}
  ,{Name:'Sanam re',Artist:'KK'}]
  
  return (
    <div className='w-full h-screen bg-zinc-300 flex items-center justify-center flex-wrap gap-10 gap-y-0'>
    {data.map((item,index)=>  <Card  key ={index}/>)}
    </div>
  )
}

export default App