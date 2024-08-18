import React from "react";
import { SiAbstract } from "react-icons/si";

const Header = () => {
  return (
    <header className="w-full bg-black p-3 flex justify-around rounded-t-2xl items-center">
      <div className="flex gap-1 items-center">
        <SiAbstract size={23}  className="text-white" />
        <h3 className="text-white">Abstract | Help Center</h3>
      </div>
      <button className="ring-1 ring-gray-400 text-white bg-[#333] rounded-md p-1">
        Submit a request
      </button>
    </header>
  );
};

export default Header;
