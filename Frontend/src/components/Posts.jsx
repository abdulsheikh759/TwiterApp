import React from "react";
import Avatar from "react-avatar";
import blueTic from "../assets/check.png";
import { FaRegComment } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { IoShareOutline } from "react-icons/io5";
import { Tooltip } from "react-tooltip";

const Posts = () => {
  return (
    <>
      <div style={{ border: "1px solid gray" }}>
        <div className="ml-10 flex cursor-pointer">
          <Avatar
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            size="50"
            className="mt-2"
            round={true}
          />
          <span className="text-md mt-6 ml-2 hover:border-b-2">
            Rachna Sharma
          </span>
          <img className="w-3 h-3 mt-8 ml-2" src={blueTic} alt="" />
          <p className="text-gray-600 ml-3 mt-6">@rachna_sharma</p>
        </div>
        <div className="flex justify-around gap-80 mt-48 mb-2">
          <div className="flex gap-10 cursor-pointer">
            <span
              data-tooltip-id="like"
              data-tooltip-content="like"
              data-tooltip-place="top"
            >
              <FaRegHeart />
              <Tooltip id="like" effect="solid" />
            </span>
            <span
              data-tooltip-id="comment"
              data-tooltip-content="Comment"
              data-tooltip-place="top"
            >
              <FaRegComment />
              <Tooltip id="comment" effect="solid" />
            </span>
          </div>
          <div className="flex gap-10 cursor-pointer">
            <span
              data-tooltip-id="bookmark"
              data-tooltip-content="bookmark"
              data-tooltip-place="top"
            >
              <FaRegBookmark />
              <Tooltip id="bookmark" effect="solid" />
            </span>
            <span
              data-tooltip-id="share"
              data-tooltip-content="Share"
              data-tooltip-place="top"
            >
              <IoShareOutline />
              <Tooltip id="share" effect="solid" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
