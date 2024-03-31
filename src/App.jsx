import React from 'react';
import Card from './Components/Card';
import Nav from './Components/Nav';

const App = () => {
  const data = [
    { Name: 'Sanam re', Artist: 'KK' },
    { Name: 'Nanchaku', Artist: 'seedhe maut' },
    { Name: 'mela', Artist: 'atif' },
    { Name: 'ram na', Artist: 'KK' },   
  ];
  

  return (
    <div className='w-full h-screen bg-zinc-300 flex flex-col py-10'>
     <div style={{ height: '10%' }} className='' >
       <Nav />
     </div>
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="flex flex-wrap justify-center gap-4">
          {data.map((item, index) => <Card key={index} values={item}/>)}
        </div>
      </div>
    </div>
  );
}

export default App;
