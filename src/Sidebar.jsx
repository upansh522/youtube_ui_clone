import React, { useState } from "react";
import "./Sidebar.css";
import Sidebar_row from "./Sidebar_row";
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
const Sidebar = () => {
    const [showmore, set_showmore] = useState(false);
  
    const changeShowmore = () => {
      set_showmore(!showmore);
      console.log(showmore);
    }
  
    return (
      <>
        <div className="sidebar">
          <Sidebar_row Selected title="Home" Icon={HomeIcon} />
          <Sidebar_row title="Trending" Icon={WhatshotIcon} />
          <Sidebar_row title="Subscription" Icon={SubscriptionsIcon} />
          <hr />
          <Sidebar_row title="Library" Icon={VideoLibraryIcon} />
          <Sidebar_row title="History" Icon={HistoryIcon} />
          <Sidebar_row title="Your videos" Icon={OndemandVideoIcon} />
          <Sidebar_row title="Watch later" Icon={WatchLaterIcon} />
          <Sidebar_row title="Liked videos" Icon={ThumbUpAltOutlinedIcon} />
          
          {showmore && (
            <>
              <Sidebar_row title="Additional Video 1" Icon={OndemandVideoIcon} />
              <Sidebar_row title="Additional Video 2" Icon={WatchLaterIcon} />
              <Sidebar_row title="Additional Video 3" Icon={ThumbUpAltOutlinedIcon} />
            </>
          )}
          
          <Sidebar_row title="Show more" Icon={ExpandMoreOutlinedIcon} onClicked={changeShowmore} />
          <hr />
        </div>
      </>
    );
  }
  
  export default Sidebar;