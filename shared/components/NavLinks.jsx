import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = (props) => {
  return (
    <ul className="">
      <li>
        <NavLink
          to="/community"
          exact
          activeClassName="font-bold"
        >
          Creators
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/c1/profile"
          activeClassName="font-bold"
        >
          My Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/posts/new"
          
          activeClassName="font-bold"
        >
          New Post
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/auth"
          activeClassName="font-bold"
        >
          Authenticate
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
