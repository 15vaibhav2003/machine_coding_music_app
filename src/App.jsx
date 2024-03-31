import React, { useState } from 'react';
import Card from './Components/Card';
import Nav from './Components/Nav';

const App = () => {
  const data = [
    { Image:'arijit.jpg',Name: 'Sanam re', Artist: 'KK',fav:false },
    { Image:'atif.jpg',Name: 'Nanchaku', Artist: 'seedhe maut',fav:false },
    { Image:'ed.jpg',Name: 'mela', Artist: 'atif',fav:false },
    { Image:'one.jpg',Name: 'ram na', Artist: 'KK' ,fav:false},   
    { Image:'casette.jpg',Name: 'ram na', Artist: 'KK',fav:false },   
    { Image:'one.jpg',Name: 'ram na', Artist: 'KK',fav:false } 
  ];
const [songData, setsongData] = useState(data)
const handle=()=>{}
  return (
    <div className='w-full h-screen bg-zinc-300 flex flex-col py-10'>
     <div style={{ height: '10%' }} className='' >
       <Nav />
     </div>
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="flex flex-wrap justify-center gap-4">
          {songData.map((item, index) => <Card key={index} values={item} handle={handle}/>)}
        </div>
      </div>
    </div>
  );
}

export default App;
