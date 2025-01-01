import React from "react";
import data from "./data";
const List = () => {
  return (
    <>
      <div className="conatiner">
        {data.map((person) => (
          <div className="flex gap-3 items-center " key={person.id}>
            <div className="w-[90px] h-[90px] rounded-full overflow-hidden p-2">
              <img
                className="w-full h-full rounded-full object-cover"
                src={person.image}
                alt="image of a person"
              />
            </div>
            <div>
              <h1 className="font-semibold text-lg mb-1">{person.name}</h1>
              <h1 className="text-gray-500 text-sm">{person.age} years</h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
