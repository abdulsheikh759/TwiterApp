import React from "react";
import Avatar from "react-avatar";
import blueTic from "../assets/check.png";

const FollowPage = () => {
  return (
    <>
      <div>
       
        <div className="flex">
          <Avatar
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            size="50"
            className="mt-2 cursor-pointer"
            round={true}
          />
          <p className="mt-5 ml-2 cursor-pointer">Virat Kohli</p>
          <img className="w-3 h-3 mt-7 ml-2" src={blueTic} alt="" />
          <span className="relative top-10 right-24 text-gray-600 text-sm">
            @imVkohli
          </span>
          <button className="btn bg-slate-100 rounded-full mt-3 text-black font-bold">Follow</button>
        </div>
      </div>
    </>
  );
};

export default FollowPage;
