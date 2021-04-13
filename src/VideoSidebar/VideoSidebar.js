import React, { useState } from "react";
import "./VideoSidebar.css";
import { Favorite, FavoriteBorder, Message, Share } from "@material-ui/icons";

function VideoSidebar({ likes, shares, messages }) {
  likes = Number(likes);
  const [liked, setLiked] = useState(false);
  return (
    <div className="videoSidebar_main">
      <div className="videoSidebar__button">
        {liked ? (
          <Favorite fontSize="large" onClick={(e) => setLiked(false)} />
        ) : (
          <FavoriteBorder fontSize="large" onClick={(e) => setLiked(true)} />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar__button">
        <Message fontSize="large" />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar__button">
        <Share fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
