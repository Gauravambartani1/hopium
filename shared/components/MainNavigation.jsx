import React from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";

const MainNavigation = (props) => {
  return (
    <MainHeader>
      <div className="flex items-center h-full">
        <button className="text-white focus:outline-none px-4">
          {/* Your button content here */}
        </button>
        <h1 className="text-white text-2xl font-bold flex-grow">
          <Link to="/" className="text-white no-underline">
            Hopium
          </Link>
        </h1>
        <nav className="flex items-center text-white">
          <NavLinks />
        </nav>
      </div>
    </MainHeader>
  );
};

export default MainNavigation;
