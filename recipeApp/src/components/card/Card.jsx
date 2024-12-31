import React from 'react'
import { Link } from 'react-router-dom'

function Card({data}) {
  return (
    <div className='flex flex-col gap-4 rounded-xl shadow-xl border-2 border-white items-center justify-center p-1.5 '>
        <div  className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
            <img src={data.image_url} alt="" />
        </div>

        <div className='overflow-hidden w-full'>
            <p className="text-sm text-cyan-700 font-medium">{data.publisher}</p>
            <h3 className="font-bold text-xl truncate text-black">{data.title}</h3>
            <Link 
                className="text-sm p-3 mt-5 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white"
                to={`/details/${data.id}`}>
                Recipe Details
            </Link>
        </div>
    </div>
  )
}

export default Card