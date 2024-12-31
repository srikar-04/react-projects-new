// import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux';
// import Card from '../card/Card';

// function Favourites() {
//   const favList = useSelector((state) => state.favouriteId);
//   const apiData = useSelector( state => state.apiData)
//   // const dispatch = useDispatch();
//   // const [data, setData] = useState([])

//   // useEffect( () => {
//   //   setData(apiData.filter( item => item.id === fav))
//   // }, [favList])

//   return (
//     <div className="w-full h-screen ">


//       {favList && favList.length > 0 ? (
//         <div className="w-full h-screen p-5 grid grid-cols-5 gap-9">
//           {favList.map(data =><Card data={apiData.filter(item => item.id === data )} key={data.id}/>)}
//         </div>
//       ) : favList.length == 0 ? (
//         <div className="w-full h-full flex justify-center font-serif pt-5 font-semibold text-xl text-red-500">
//           <p>Item not Found</p>
//         </div>
//       ) : (
//         <div className="w-full h-full flex justify-center font-serif pt-5 font-semibold text-xl text-green-500">
//           <p>Search Something To Start</p>
//         </div>
//       )}


//     </div>
//   );
// }

// export default Favourites






import React from 'react'
import { useSelector } from 'react-redux';
import Card from '../card/Card';

function Favourites() {
  const favList = useSelector((state) => state.favouriteId); // Favourite IDs
  const apiData = useSelector(state => state.apiData); // All API data

  return (
    <div className="w-full h-screen">
      {favList && favList.length > 0 ? (
        <div className="w-full  p-5 grid grid-cols-5 gap-9">
          {favList.map((favId) => {
            const data = apiData.find(item => item.id === favId); // Find the specific data item
            return <Card data={data} key={favId} />; // Pass the single object to Card
          })}
        </div>
      ) : favList.length === 0 ? (
        <div className="w-full h-full flex justify-center font-serif pt-5 font-semibold text-xl text-red-500">
          <p>No Items Added</p>
        </div>
      ) : (
        <div className="w-full h-full flex justify-center font-serif pt-5 font-semibold text-xl text-green-500">
          <p>No Items Added</p>
        </div>
      )}
    </div>
  );
}

export default Favourites;
