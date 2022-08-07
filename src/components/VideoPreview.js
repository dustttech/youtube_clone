import React from "react";
import { useGlobalContext } from "./../context";

function VideoPreview() {
  const {
    showPreview,
    previewVideo = {},
    closePreviewVideo,
  } = useGlobalContext();
  if (showPreview && previewVideo) {
    let {
      width,
      height,
      x,
      y,
      videourl,
      thumbnail,
      channel,
      title,
      view,
      timepublish,
    } = previewVideo;
    let offset = 40;

    let styleVideo = {
      width: width + offset + "px",
      height: height + offset * 2.5 + "px",
      top: `${y}px`,
      left: `${x}px`,
    };
    return (
      <div
        onMouseLeave={closePreviewVideo}
        style={styleVideo}
        className={`${
          showPreview ? "isShow" : ""
        } c-video__preview c-video__container`}
      >
        <a
          className="c-video__thumbnail c-video__thumbnail-preview"
          href={videourl}
        >
          <img src={thumbnail} alt="" />
        </a>
        <div className="c-video__info c-video__info-preview">
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
          <div className="c-video__btns c-video__btns--full">
            <a href="#">Watch Later</a>
            <a href="#">Add to Waiting List</a>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoPreview;
