import React from "react";

const CreatorsItem = (props) => {
  return (
    <div className="flex justify-center">
      <li className="bg-black rounded-lg shadow-md p-4 my-4 flex items-center">
        {/* Profile Image */}
        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden border-2 border-white">
          <img
            className="h-full w-full object-cover"
            src={props.image}
            alt={props.name}
          />
        </div>

        {/* Profile Info */}
        <div className="ml-4">
          <h2 className="text-lg font-semibold text-white">{props.name}</h2>
          <h2 className="text-md font-light text-white text-justify">{props.title}</h2>
        </div>
      </li>
    </div>
  );
};

export default CreatorsItem;
