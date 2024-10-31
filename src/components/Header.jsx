import React from "react";

const Header = ({ title }) => {
  return (
    <header>
      <div
        className="justify-center flex navbar bg-base-200"
        data-theme="cyberpunk"
      >
        <h1 className="text-lg">{title}</h1>
      </div>
    </header>
  );
};

export default Header;
