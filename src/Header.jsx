import React, { useState } from "react";
import "./Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  const [setValue, currentValue] = useState("");

  const Change = (e) => {
    const value = e.target.value;
    currentValue(value);
  }

  const Searching = () => {
    window.location.href = `https://www.youtube.com/results?search_query=${setValue}`;
  }

  // const Refresh=()=>{
  //   window.location.reload();

  // }

  return (
    <>
      <div className="header">
        <div className="header__left">
          <MenuIcon />
          <Link to="/">
          <img
            className="header_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="Youtube logo"
            // onClick={Refresh}
          />
          </Link>         
        </div>

        <div className="header__input">
          <input type="text" placeholder="search" onChange={Change} value={setValue} />
          <SearchIcon className="header__searchicon" onClick={Searching} />
          <KeyboardVoiceIcon className="header__keyboardVoiceicon" />
        </div>

        <div className="header__icons">
          <VideoCallIcon className="header__icons" />
          <AppsIcon className="header__icons" />
          <NotificationsIcon className="header__icons" />
          <Avatar src="https://imgs.search.brave.com/eW-kUhgDOJNDNJQk5g6NW6iaANQ9PdzB1uLgQXGGF4U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM0/MzgxNTE1OS92ZWN0/b3IvdmVjdG9yLWRl/c2lnbi10ZW1wbGF0/ZS1jaXJjbGUtYWJz/dHJhY3QtaWNvbi5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/ZE1rM3k1OFpmTU90/Tk1pY0JIaGlfT2JB/MnJIcHFtbm5xQjV4/cmtjNU15RT0"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
