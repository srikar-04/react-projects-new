import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({id, info, title}) => {

  // const [ids, setIds] = useState()
  const [plus, setPlus] = useState(true)

  const button = () => {
    setPlus(prev => !prev)
  }

   return (
    <>
      <div onClick={() => button()} className='text-lg p-[18px] my-2 rounded shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] font-semibold flex items-center justify-between flex-col'>
        <div className='flex items-center justify-between w-full '>
          <span>{title}</span>
          {plus 
          ? 
            <AiOutlinePlus
              // onClick={() => button()}
              className='rounded-full bg-gray-300 p-1 text-red-500 text-2xl cursor-pointer' /> 
          :  
            <AiOutlineMinus 
              // onClick={() => button()}
              className='rounded-full bg-gray-300 p-1 text-red-500 text-2xl cursor-pointer'/> }
        </div>
          
        {plus ? <div></div> : <div className='inline-block text-left text-gray-500 text-[16px]'>{info}</div> }
      </div>
    </>
  )
};

export default Question;
