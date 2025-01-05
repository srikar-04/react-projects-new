import React, { useEffect, useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [info, setInfo] = useState([])

  //  console.log(info); 
  // id, info, title

  useEffect(() => {
  setInfo(data)
  },[])
  
  return (
    <>
      <div className="component  w-full min-h-screen flex select-none">
        <div className='container min-h-auto shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]'>
          <h1 className='text-3xl font-semibold'>questions and answers about login</h1>
          <div>
            {info && info.map((item) => <SingleQuestion key={item.id} id={item.id} info={item.info} title={item.title}/>)}
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
