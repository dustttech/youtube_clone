import React, { useEffect } from "react";
import { videos } from "./../data/index";
import Video from "./../components/Video";
function VideoList(props) {
  useEffect(() => {
    // console.log(videoItem.current.getBoundingClientRect());
  }, []);
  return (
    <ul id="videoList" className="c-videoList">
      {videos.map((video, index) => (
        <li key={index}>
          <Video video={video} />
        </li>
      ))}
    </ul>
  );
}

export default VideoList;
