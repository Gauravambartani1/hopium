import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = (props) => {
  return (
    <ul className="flex items-center justify-end space-x-4">
      <li>
        <NavLink
          to="/community"
          exact
          className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
          activeClassName="font-bold"
        >
          Creators
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/c1/profile"
          className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
          activeClassName="font-bold"
        >
          My Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/posts/new"
          className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
          activeClassName="font-bold"
        >
          New Post
        </NavLink>
      </li>
      <li className="ml-auto">
        <NavLink
          to="/auth"
          className="text-white hover:text-gray-300 transition duration-300 ease-in-out"
          activeClassName="font-bold"
        >
          Authenticate
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
