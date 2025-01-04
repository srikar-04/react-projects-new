import React from 'react';
import Tour from './Tour';
const Tours = ({tourData, removeTour}) => {
  
  return (
    <>
      <h2 className='flex justify-center pt-5 mb-2 text-5xl'>Our Tours</h2>
      {tourData.map((tour) => <Tour key={tour.id} {...tour} removeTour={removeTour} />)}
    </>
  )
};

export default Tours;
