import React from "react";
import data from "./data";
const List = () => {
  return (
    <>
      <div className="conatiner">
        {data.map((person) => (
          <div className="flex gap-3 items-center " key={person.id}>
            <div className="w-[20%] h-[20%] rounded-full overflow-hidden p-2">
              <img
                className="w-full h-full rounded-full object-cover"
                src={person.image}
                alt="image of a person"
              />
            </div>
            <div>
              <h1 className="text-green-500">{person.name}</h1>
              <h1>{person.age} years</h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
