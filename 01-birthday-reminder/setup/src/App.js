import React, { useState } from "react";
import data from "./data";
import List from "./List";
import "./index.css";
function App() {
  const [person, setPerson] = useState(data.length);
  const [disable, setDisable] = useState(false);
  console.log(disable);
  const btnClick = () => {
    setDisable((prev) => !prev)
    // setPerson(0);
  }


  return (
    <>
      <div className="conatiner w-full min-h-screen flex items-center justify-center bg-zinc-800">
        <div className="w-[500px] h-auto border border-white bg-white rounded-lg shadow-md shadow-gray-500 p-4 ">
          
          <div className="text-xl text-center p-3">
            {disable ? <span>0</span> : person } birthdays today
          </div>
          {disable ? <div></div> : <List />}
          <div className="mt-4 w-full">
            <button
              onClick={() => btnClick()}
              className="w-full text-center text-xl bg-zinc-800 rounded-lg text-white p-2"
            >
              {disable ? <h1>Undo</h1> : <h1>Clear All</h1>}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
