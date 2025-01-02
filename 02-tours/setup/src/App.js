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

  const fetchToursData = () => {
    const toursData = data();
    console.log(toursData, 'data'); 
    setTourData(tourData);
  }

  useEffect(() => {
    fetchToursData();
  }, [])
  
  return (
    <>
      <div className="container w-full h-screen bg-zinc-600">
        {loading ? <Loading/> : <h2 className='text-white'>Tours Project Setup</h2> }
      </div>
    </>
  )
}

export default App
