import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "./../context";

function Video({ video }) {
  let { thumbnail, channel, title, view, timepublish, videoLength, videourl } =
    video;
  const { showPreviewVideo, processHover, resetHover, loadPreviewVideo } =
    useGlobalContext();
  let videoItem = useRef();
  const handleHover = () => {
    let { width, height, x } = videoItem.current.getBoundingClientRect();
    let y = videoItem.current.offsetTop;
    loadPreviewVideo({ ...video, width, height, x, y });
    processHover(3, showPreviewVideo);
  };
  return (
    <div ref={videoItem} className="c-video">
      <a
        className="c-video__thumbnail"
        href={videourl}
        onMouseEnter={handleHover}
        onMouseLeave={resetHover}
      >
        <img src={thumbnail} alt="" />
        <p className="c-thumbnail__hover-p">Continue hover to play</p>
      </a>
      <div className="c-video__header">
        <a className="c-video__avt" href={channel.url}>
          <img src={channel.thumnail} alt="" />
        </a>
        <div className="c-video__meta">
          <a href={videourl} className="c-video__title">
            {title}
          </a>
          <a
            href={channel.url}
            className="c-video__txt c-video__txt-hover c-video__poster"
          >
            {channel.name}
          </a>
          <p className="c-video__txt">
            {view} - {timepublish}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Video;
