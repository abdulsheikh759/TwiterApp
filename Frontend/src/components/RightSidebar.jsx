import React from "react";
import Avatar from "react-avatar";
import FollowPage from './FollowPage'
import Foter from "./Foter";

const RightSidebar = () => {
  return (
    <>
      <div className=" ml-3 w-[330px]">
        <label className="input input-bordered flex items-center gap-2  mt-2 rounded-3xl">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-12 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <div
          className="rounded-xl mt-10 p-3"
          style={{ border: "2px solid gray" }}
        >
          <p className="font-bold text-xl">Subscribe to Premium</p>
          <span>
            Subscribe to unlock new features and <br /> if eligible, receive a
            share of ads revenue.
          </span>
          <button className="btn btn-primary rounded-full mt-2 text-white font-bold">
            Subscribe
          </button>
        </div>
        <div
          className="rounded-xl mt-10 p-3"
          style={{ border: "2px solid gray" }}
        >
          <p>Live on X</p>
         <div className="flex">
         <Avatar
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            size="20"
            className="mt-2"
            round={true}
          />
          <span className="mt-4 ml-3" style={{fontSize:"10px"}}>Rachna Sharma</span>
         </div>
        </div> 
        <div className="rounded-xl mt-10 p-3" style={{ border: "2px solid gray" }}>
          <span> Who to follow</span>
        <FollowPage/> 
        <FollowPage/> 
        <FollowPage/> 
        <span className="ml-4 mt-4 relative top-3 text-blue-500 cursor-pointer">Show more</span>  
        </div>

        <Foter/>
      </div>
    </>
  );
};

export default RightSidebar;
