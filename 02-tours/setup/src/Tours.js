import React from 'react';
import Tour from './Tour';
const Tours = ({tourData}) => {
  console.log(tourData, 'tourdata');
  
  return (
    <>
      <h2 className='flex justify-center pt-5 text-white'>Our Tours</h2>;
      {tourData.map((tour) => <Tour key={tour.id} {...tour} />)}
    </>
  )
};

export default Tours;
