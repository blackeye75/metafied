import React from "react";
import { MdAccountCircle } from "react-icons/md";
import { MdOutlineContactSupport } from "react-icons/md";
import Card from "./Card";

const CardConatiner = () => {
  return (
    <main className="w-full h-[80%] bg-blue-600 overflow-hidden   flex rounded-lg mt-5">
      <div className="btn w-fit  h-full p-2 pt-20 gap-7 bg-blue-800   flex flex-col justify-start">
        <MdAccountCircle size={50} />
        <MdOutlineContactSupport size={50} />
      </div>
      <div className="cards w-full  bg-blue-600/35  opacity-95 flex justify-center items-center  gap-5  h-full ">
        <Card
          link={
            "https://images.unsplash.com/photo-1528922087877-3f44f53a8f7d?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          title={"Create Data Flow"}
          subtitle={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, aliquam."}
        />
        <Card
          link={
            "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          title={"Create Data Flow"}
          subtitle={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, aliquam."}
        />
      </div>
    </main>
  );
};

export default CardConatiner;
