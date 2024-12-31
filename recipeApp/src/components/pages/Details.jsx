// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";

// function Details() {
//   const { id } = useParams();

//   const select = useSelector((state) => state.apiData);

//   const [data, setData] = useState([]);

//   useEffect(() => {
//     function getElementData() {
//       const recipeData = select.filter((item) => item.id === id);

//       if (recipeData && recipeData.length > 0) {
//         setData(() => recipeData);
//       }
//     }
//     getElementData();
//   }, [id,select]);

//   console.log(data, "DATA IN STATE");

//   return (
//     <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
//       <div className="row-start-2 lg:row-start-auto">
//         <div className="h-96 overflow-hidden rounded-xl group">
//           <img
//             src={data && data[0].image_url}
//             className="w-full h-full object-cover block group-hover:scale-105 duration-300"
//             alt=""
//           />
//         </div>

//         <div className="flex flex-col gap-3">
//           <p className="text-sm text-cyan-700 font-medium">
//             {data && data[0].publisher}
//           </p>
//           <h3 className="font-bold text-xl truncate text-black">
//            {data && data[0].title}
//           </h3>
//         </div>
//       </div>

//       {/* <div></div> */}
//     </div>
//   );
// }

// export default Details;

// GPT CODE

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setFavouriteId } from "../../app/RecipeSlice";

function Details() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const select = useSelector((state) => state.apiData); // Get the apiData from Redux store
  const selectFavourites = useSelector((state) => state.favouriteId);
  const [data, setData] = useState([]); // Initialize data as an empty array

  function handleFavourites() {
    dispatch(setFavouriteId(id));
  }

  console.log(selectFavourites, "FAVOURITE ID");

  useEffect(() => {
    function getElementData() {
      if (select && select.length > 0) {
        const recipeData = select.filter((item) => item.id === id); // Compare item id with the params id

        if (recipeData && recipeData.length > 0) {
          setData(recipeData); // Set data if found
        }
      }
    }
    getElementData();
  }, [id, select]); // Add select to the dependency array

  // console.log(data, "DATA IN STATE");

  return (
    <div className="container mx-auto p-10 grid grid-cols-1 lg:grid-cols-2 gap-10 h-screen">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          {data.length > 0 && ( // Check if data has been set before rendering the image
            <img
              src={data[0].image_url}
              className="w-full h-full object-cover block group-hover:scale-105 duration-300"
              alt={data[0].title || "Recipe Image"} // Add alt text for better accessibility
            />
          )}
        </div>
      </div>

      {/* <button 
            onClick={handleFavourites}
          className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white">
            Save As Favourites
          </button> */}

      <div className="flex flex-col gap-3">
        {data.length > 0 && (
          <>
            <p className="text-sm text-cyan-700 font-medium">
              {data[0].publisher}
            </p>
            <h3 className="font-bold text-xl truncate text-black">
              {data[0].title}
            </h3>
          </>
        )}

        <div>
          {selectFavourites && selectFavourites.length > 0 && selectFavourites.includes(id) ? (
            <button
              onClick={handleFavourites}
              className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white"
            >
              Delete From Favourites
            </button>
          ) : (
            <button
              onClick={handleFavourites}
              className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white"
            >
              Save As Favourites
            </button>
          )}
        </div>

      </div>
    </div>
  );
}

export default Details;
