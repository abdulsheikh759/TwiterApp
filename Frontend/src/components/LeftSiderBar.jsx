import React from "react";
import '../Css/leftSide.css'

import { MdHomeFilled } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { RiNotification2Line } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { CiCircleMore } from "react-icons/ci";
import {Routes,Route} from 'react-router-dom'

import Avatar from "react-avatar";

import { Tooltip } from "react-tooltip";

const LeftSiderBar = () => {
  return (
    <>
      <div className="ml-3 custom-scrollbar ">
         
        <div className=" flex flex-col gap-8  ml-10">
          
          <div className="cursor-pointer">
            <img
              src="https://freepnglogo.com/images/all_img/1691832708new-twitter-x-logo-white.png"
              width={"30px"}
              alt=""
            />
          </div>
          <div
            data-tooltip-id="home"
            data-tooltip-content="Home"
            data-tooltip-place="bottom"
            // data-tooltip-variant="dark"
            className="cursor-pointer text-sm hover:bg-transparent-light hover:rounded-full"
          >
              
            <MdHomeFilled className="w-7 h-7" /> 
            <Tooltip id="home"  effect="solid"/>
          </div>

          <div className="cursor-pointer" 
           data-tooltip-id="search"
           data-tooltip-content="Explore"
           data-tooltip-place="bottom"
           // data-tooltip-variant="dark"
          >
            <CiSearch className="w-7 h-7" />
            <Tooltip id="search"  effect="solid"/>

          </div>
          <div className="cursor-pointer"
          data-tooltip-id="notifications"
          data-tooltip-content="Notifications"
          data-tooltip-place="bottom"
          // data-tooltip-variant="dark"
          >
            <RiNotification2Line className="w-7 h-7" />
            <Tooltip id="notifications"  effect="solid"/>

          </div>
          <div className="cursor-pointer"
            data-tooltip-id="message"
            data-tooltip-content="Messages"
            data-tooltip-place="bottom"
            // data-tooltip-variant="dark"
          >
            <MdOutlineMail className="w-7 h-7" />
            <Tooltip id="message"  effect="solid"/>

          </div>

          <div className="w-6 h-6 border cursor-pointer "
           data-tooltip-id="grok"
           data-tooltip-content="Grok"
           data-tooltip-place="bottom"
           // data-tooltip-variant="dark"
          >
            <img
              src="https://images.seeklogo.com/logo-png/52/2/grok-chatbot-logo-png_seeklogo-523502.png"
              alt=""
            />
            <Tooltip id="grok"  effect="solid"/>

          </div>

          <div className="w-8 h-8 cursor-pointer"
             data-tooltip-id="communities"
             data-tooltip-content="Communities"
             data-tooltip-place="bottom"
             // data-tooltip-variant="dark"
          >
            <img
              src="https://pbs.twimg.com/profile_images/1685001119934607360/Dh2Z7jCt_400x400.png"
              alt=""
            />
            <Tooltip id="communities"  effect="solid"/>

          </div>
          <div className="cursor-pointer"
             data-tooltip-id="profile"
             data-tooltip-content="Profile"
             data-tooltip-place="bottom"
             // data-tooltip-variant="dark"
          >
            <CiUser className="w-7 h-7" />
            <Tooltip id="profile"  effect="solid"/>

          </div>
          <div className="cursor-pointer"
             data-tooltip-id="more"
             data-tooltip-content="More"
             data-tooltip-place="bottom"
             // data-tooltip-variant="dark"
          >
            <CiCircleMore className="w-7 h-7" />
            <Tooltip id="more"  effect="solid"/>

          </div>
        </div>
        <div className="flex flex-col mt-8 gap-4 ml-6 relative bottom-4">
          <div className="border rounded-full w-14 h-14 cursor-pointer"
             data-tooltip-id="post"
             data-tooltip-content="Post"
             data-tooltip-place="bottom"
             // data-tooltip-variant="dark"
          >
            <img
              src="https://cdn0.iconfinder.com/data/icons/twitter-ui-flat/48/Twitter_UI-15-512.png"
              alt=""
            />
            <Tooltip id="post"  effect="solid"/>

          </div>
          <div className="cursor-pointer"
             data-tooltip-id="account"
             data-tooltip-content="Accounts"
             data-tooltip-place="top"
             // data-tooltip-variant="dark"
          >
            <Avatar googleId="118096717852922241760" size="50" round={true} />
            <Tooltip id="account"  effect="solid"/>

          </div>
        </div>
         
      </div>
    </>
  );
};

export default LeftSiderBar;
