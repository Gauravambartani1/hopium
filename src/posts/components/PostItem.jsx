import React from "react";
import Button from "../../../shared/components/FormElements/Button";
const PostItem = (props) => {
  return (
    <li className="bg-white rounded-lg shadow-md overflow-hidden sm:max-w-md sm:mx-auto ">
      <div className="relative">
        <img
          src={props.image}
          className="w-full h-48 object-cover sm:h-64"
          alt="Post"
        />
      </div>
      <div className="p-4 sm:p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2">{props.title}</h2>
        <p className="text-gray-700">{props.description}</p>
      </div>
      <div className="flex justify-between items-center px-4 py-2 bg-gray-100 border-t border-gray-200">
        <Button to={`/places/${props.id}`} className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none">
          Edit
        </Button>
        <Button danger className="px-3 py-2 text-sm font-medium text-red-600 hover:text-red-700 focus:outline-none">
          Delete
        </Button>
      </div>
    </li>
  );
};

export default PostItem;
