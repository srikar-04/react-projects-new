import React, { useState } from 'react';

const Tour = (props) => {
  console.log(props.id, 'id', props.image, 'image',props.info, 'info', props.name, 'name');
  
  return (
    <>
     <div className='bg-green-400 p-2 flex justify-center'>
      <h2 className='bg-red-400'>tour component</h2>;
     </div>
    </>
  )
};

export default Tour;
