import React from "react";

const MainHeader = (props) => {
  return (
    <header className="bg-black w-full fixed top-0 left-0 z-50 py-4 px-6">
      {props.children}
    </header>
  );
};

export default MainHeader;
