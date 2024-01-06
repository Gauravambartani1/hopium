import React from "react";

const MainHeader = (props) => {
  return (
    <header className="bg-white">
      {props.children}
    </header>
  );
};

export default MainHeader;
