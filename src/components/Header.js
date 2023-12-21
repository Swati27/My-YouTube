import React from "react";

const Header = () => {
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 justify-between">
        <img className="h-8"
          alt="menu"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
        />
        <img className="h-8 mx-2"
          alt="youtube-logo"
          src="https://1000logos.net/wp-content/uploads/2017/05/Red-YouTube-logo.png"
        />
        </div>
        <div className="col-span-10 px-10">
          <input className = "w-1/2 border border-gray-400 p-2 rounded-l-full"type="text"/>
            <button className="border border-gray-400 px-5 py-2 bg-gray-100 rounded-r-full">
                🔍
            </button>
        </div>
        <div className="col-span-1">
          <img className="h-8"
            alt="user"
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          />
        </div>
    </div>
  );
};

export default Header;
