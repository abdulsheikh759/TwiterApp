import React from "react";
import LeftSideBar from "./LeftSiderBar";
import Feed from "./Feed";
import RightSideBar from "./RightSidebar";

const Home = () => {
  return (
    <div className=" text-white">
      
      <div className="flex text-white sticky">
      <LeftSideBar />
        <Feed />
        <RightSideBar />
      </div>
    </div>
  );
};

export default Home;
