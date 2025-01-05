import React from 'react';
import Review from './Review';
function App() {
  return (
    <>
      <div className='w-full h-screen bg-zinc-00 flex flex-col items-center justify-center'>
        <h1 className='text-2xl mb-14 underline underline-offset-8 select-none'>Our Reviews</h1>
        <Review />
      </div>
    </>
  )
}

export default App;
