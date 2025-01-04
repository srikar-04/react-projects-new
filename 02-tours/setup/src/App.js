import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import data from './data';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
// const url = 'https://course-api.com/react-tours-project'
// const url = 'https://cors-anywhere.herokuapp.com/https://course-api.com/react-tours-project'
function App() {

  const [loading, setLoading] = useState(false);
  const [tourData, setTourData] = useState([])

  const removeTour = (id) => {
    // console.log(id);
    
    const newTours = tourData.filter((tour) => tour.id !== id)
    setTourData(newTours);
  }
  const fetchToursData = () => {
    setLoading(true)
    const toursData = data();
    setTourData(toursData);
    setLoading(false)
  }

  useEffect(() => {
    fetchToursData();
  }, [])

  return (
    <>
      <div className="container w-full min-h-screen bg-zinc-00">
        {loading ? <Loading/> : 
          tourData.length==0 ?
          (
            <>
              <div className=' mt-2 mb-2 flex p-1 text-4xl items-center justify-center'>No Tours Left</div>
              <div className='flex items-center justify-center'>
              <button 
                onClick={() => fetchToursData()}
                className='bg-blue-500 text-white rounded p-0.5 font-semibold text-lg'>Refresh</button>
              </div>
            </>
          )
          :
          <Tours tourData = {tourData} removeTour={removeTour}/> }
      </div>
    </>
  )
  
}

export default App
