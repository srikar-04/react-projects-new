import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../card/Card";

function Home() {
  const select = useSelector((state) => state.apiData);
  const dispatch = useDispatch();

  return (
    <div className="w-full h-screen ">


      {select && select.length > 0 ? (
        <div className="w-full h-screen p-5 grid grid-cols-5 gap-9">
          {select.map(data =><Card data={data} key={data.id}/>)}
        </div>
      ) : select.length == 0 ? (
        <div className="w-full h-full flex justify-center font-serif pt-5 font-semibold text-xl text-red-500">
          <p>Item not Found</p>
        </div>
      ) : (
        <div className="w-full h-full flex justify-center font-serif pt-5 font-semibold text-xl text-green-500">
          <p>Search Something To Start</p>
        </div>
      )}


    </div>
  );
}

export default Home;
