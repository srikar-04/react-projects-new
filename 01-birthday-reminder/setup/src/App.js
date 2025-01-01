import React, { useState } from "react";
import data from "./data";
import List from "./List";
import './index.css';
function App() {
  const [person, setPerson] = useState(data.length)
  const [disable, setDisable] = useState(false)
  console.log(disable);
  
  
  return (
    <>
      <div className="conatiner w-full min-h-screen flex items-center justify-center bg-zinc-800">
        <div className="w-[500px] h-auto border border-white bg-white rounded-lg shadow-md shadow-gray-500 p-4 ">
          {/* <img src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg" alt="hello world" /> */}
          <div className="text-xl text-center p-3">{person} birthdays today</div>
          {disable ? <div></div> : <List /> }
          <div className="mt-4 w-full">
            <button onClick={() => setDisable(true)} className="w-full text-center text-xl bg-zinc-800 rounded-lg text-white p-2">Clear All</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default App;
