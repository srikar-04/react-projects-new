import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  // console.log(people);
  const [index, setIndex] = useState(0);
  const {id, image, job, name, text} = people[index]
  
  const rightButton = () => {
    console.log('clicked on right button', Math.random());
  }

  const leftButton = () => {
    console.log('clicked on left button', Math.random());
  }

  return (
    <>
      <div className='container h-auto border flex flex-col items-center select-none'>
        {/* image div */}
        <div className='mt-4 cursor-pointer w-[100px] h-[100px] relative'>
          <div className='w-full h-full bg-blue-500 rounded-full absolute'></div>
          <img className='w-full h-full rounded-full object-cover absolute left-[-12px]' src={image} alt={name} />
          <FaQuoteRight className='absolute left-[-4px] bg-blue-500 text-white p-1 rounded-full text-2xl' />
        </div>
        <h1 className='cursor-pointer text-[15px] mt-3 mb-2 tracking-tight'>{name}</h1>
        <h1 className='cursor-pointer text-sm text-blue-400 mb-2'>{job}</h1>
        <p className='leading-6 text-sm text-center mx-10'>{text}</p>
        {/* buttons */}
        <div className='flex text-blue-500 cursor-pointer mb-3'>
          <FaChevronLeft
            onClick={() => leftButton()}
            className='hover:text-blue-700' />
          <FaChevronRight
            onClick={() => rightButton()}
            className='hover:text-blue-700' />
        </div>
        {/* surprise button */}
        <button className='random-btn mb-3'>surprise me</button>
      </div>
    </>
  )
};

export default Review;
