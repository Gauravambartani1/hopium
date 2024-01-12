import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import "../../src/index.css";

const MainNavigation = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="bg-white">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <NavLink to="/">
          <img
            className="w-20 cursor-pointer"
            src="../../public/logo.png"
            alt="Logo"
          />
          </NavLink>
        </div>
        <div
          className={`nav-links md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${
            isMenuOpen ? "top-[9%]" : "top-[-100%]"
          } md:w-auto w-full flex items-center px-5 transition-all duration-300`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <NavLink className="hover:text-grey-500" to="#">
                Jobs
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:text-grey-500" to="/community">
                Community
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:text-grey-500" to="#">
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:text-grey-500" to="#">
                Brands
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
            Sign In
          </button>
          <div className="md:hidden">
          <ion-icon
            onClick={onToggleMenu}
            name={isMenuOpen ? "close" : "menu"}
            className="text-3xl cursor-pointer md:hidden"
          ></ion-icon>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainNavigation;
