import React from "react";
import Avatar from "react-avatar";
import "../Css/Utils.css";

import { CiImageOn } from "react-icons/ci";
import { MdOutlineGifBox } from "react-icons/md";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

import { Tooltip } from "react-tooltip";

const Createtext = () => {
  return (
    <>
      <div className="w-[640px]" style={{ border: "1px solid gray" }}>
        <div className="flex gap-60 justify-center mt-2 py-2">
          <p className="font-bold font-sans cursor-pointer forYou">For you</p>

          <p className="font-bold font-sans cursor-pointer">Following</p>
        </div>
        <div style={{ border: "1px solid gray" }}>
          <div className="mt-5 ml-10 flex">
            <Avatar googleId="118096717852922241760" size="50" round={true} />
            <div className="w-[300px]">
              <input
                className="feedPlaceHolderInput outline-none w-[300px] bg-transparent"
                type="text"
                placeholder="What is happening?!"
              />
            </div>
          </div>
          <hr className=" m-auto mt-8" style={{ width: "580px" }} />
          <div className="flex justify-around gap-72  mt-10 mb-3 items-center">
            <div className="flex gap-8">
              <div
                data-tooltip-id="media"
                data-tooltip-content="Media"
                data-tooltip-place="top"
                // data-tooltip-variant="dark"
              >
                <CiImageOn className="w-6 h-6 cursor-pointer" />
                <Tooltip id="media" effect="solid" />
              </div>
              <div
              data-tooltip-id="gif"
              data-tooltip-content="GIF"
              data-tooltip-place="top">
                <MdOutlineGifBox className="w-6 h-6 cursor-pointer" />
                <Tooltip id="gif" effect="solid" />

              </div>
              <div
              data-tooltip-id="emoji"
              data-tooltip-content="Emoji"
              data-tooltip-place="top">
                <MdOutlineEmojiEmotions className="w-6 h-6 cursor-pointer" />
                <Tooltip id="emoji" effect="solid" />

              </div>
              <div
              data-tooltip-id="location"
              data-tooltip-content="Location"
              data-tooltip-place="top">
                <CiLocationOn className="w-6 h-6 cursor-pointer" />
                <Tooltip id="location" effect="solid" />

              </div>
            </div>
            <div>
              <button className="btn btn-primary rounded-3xl p-4 font-bold text-white">
                Post
              </button>
            </div>

          </div>

        </div>
        <div className="flex p-4" style={{ border: "1px solid gray" }}>
            <p className="m-auto text-blue-500">Shwo {840} posts</p> 
        </div>
      </div>
    </>
  );
};

export default Createtext;
