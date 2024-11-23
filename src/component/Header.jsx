import React from "react";
import { AiFillAccountBook } from "react-icons/ai";
import { AiFillAlert } from "react-icons/ai";
import { AiFillAlipayCircle } from "react-icons/ai";
import { AiFillAndroid } from "react-icons/ai";
import { MdManageAccounts } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";

const Header = () => {
  return (
    <nav className="h-[10vh] w-full flex">
      <div className="left flex items-center justify-start pl-8 gap-1 w-full h-full">
        <div className="w-9 h-9 rounded-full  border-transparent bg-gradient-to-b from-blue-500 to-blue-900 flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-black"></div>
        </div>
        <h1 className="text-2xl z-10 font-bold">metafied</h1>
      </div>
      <div className="right flex items-center pr-6 gap-3  w-full h-full">
        <div className="icons flex items-center justify-end gap-2 w-full h-full">
          <AiFillAccountBook size={20} />
          <AiFillAlert size={20} />
          <AiFillAlipayCircle size={20} />
          <AiFillAndroid size={20} />
          <AiFillAlert size={20} />
        </div>
        <div className="acc w-24 h-9 flex items-center justify-between px-4 bg-white rounded-full ">
          <MdManageAccounts color="black" size={20} />
          <IoIosArrowUp color="black" size={20} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
