import React, { useState } from 'react';

const Tour = ({ id, image, info, name, price }) => {

  // console.log(info.substring(0, 300));

  const [more, setMore] = useState(false)
  
  
  return (
    <>
     <div className=' p-2 flex flex-col justify-center w-[500px] h-auto mx-auto border mb-2'> 
      {/* image of place */}
      <div className='w-[480px] h-[320px]'>
      <img className='w-full h-full object-cover' src={image} alt="image of place" />
      </div>
      {/* title and price */}
      <div className='flex justify-between mt-2 items-center mb-2'>
        <h1 className='text-sm'>{name}</h1>
        <h1 className='text-sm'><span className='bg-blue-400 rounded p-0.5'>${price}</span></h1>
      </div>

      <div className='text-sm text-gray-500 leading-[22px] mb-5'>
        
        {info && !more  ? (
          <>
            {info.substring(0, 300)}
            <button
              onClick={() => {
                console.log('clicked on read button', Math.random())
                return setMore(prev => !prev)
              }}
             className='text-blue-500'>Read more....</button>
          </>
        )
        : (
          <>
            {info}
            <button
              onClick={() => setMore(prev => !prev)}
            className='text-blue-500'>Read Less</button>
          </>
        )}

      </div>

      <div className='flex items-center justify-center p-1'>
        <button className='text-red-500 border border-red-500 py-0.5 rounded font-semibold px-1'>Not Interested</button>
      </div>

     </div>
    </>
  )
};

export default Tour;
