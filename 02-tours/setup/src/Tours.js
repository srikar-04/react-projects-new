import React from 'react';
import Tour from './Tour';
const Tours = ({tourData}) => {
  
  return (
    <>
      <h2 className='flex justify-center pt-5 text-red-0'>Our Tours</h2>;
      {tourData.map((tour) => <Tour key={tour.id} {...tour} />)}
    </>
  )
};

export default Tours;
