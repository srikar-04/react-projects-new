import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Favourites from './components/pages/Favourites.jsx'
import Home from './components/pages/Home.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { setInput } from './app/RecipeSlice.jsx'
import Details from './components/pages/Details.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/favourites' element={<Favourites />}/>
      <Route path='/details/:id' element={<Details />}/>
    </Route>
  )
)

function App() {  

  return (
    <>
      {/* <div className='w-full h-screen bg-zinc-500'> */}
        <RouterProvider router={router} />
      {/* </div> */}
    </>
  )
}

export default App
