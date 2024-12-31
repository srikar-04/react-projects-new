// src/components/navBar/NavBar.jsx
import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { setInput, setApiData } from '../../app/RecipeSlice';
import { useDispatch, useSelector } from 'react-redux';

function NavBar() {

  const dispatch = useDispatch()
  const select = useSelector(state => state.input)

  async function handleClick() {
    const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${select}`)

    const data = await response.json()

    if(data) {
      dispatch(setApiData(data.data.recipes))
      dispatch(setInput(''));
    } else {
      console.error("data is not present")
    }
  }

  // console.log(select);
  

  return (
    <div className='w-full'>
      <div className='w-full h-[15%] border border-black mt-8 flex justify-between items-center p-4'>
        <div><h1 className='font-semibold text-lg cursor-pointer'>Recipe App</h1></div>
        
        <div>

          <input 
            placeholder='enter recipe...'    
            type="text" 
            value={select}
            onChange={(e) => dispatch(setInput(e.target.value))}
            className='border p-1.5 rounded-xl shadow-xl hover:scale-105 transition: all duration-300 outline-none'
          />

          <button className='mx-1.5 p-1.5 bg-black text-white rounded-xl' onClick={() => handleClick()}>Search</button>
        </div>

        <div className='flex gap-3  p-1 mx-2'>
          <NavLink 
            to="/"
            className={ ({isActive}) => `${isActive ? 'font-semibold text-lg duration-300 '  : 'p-1' }`}
          >Home</NavLink>
          <NavLink
             className={ ({isActive}) => `${isActive ? 'font-semibold text-lg duration-300' : 'p-1' }`}
          to="/favourites">Favourite</NavLink>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
