import { Home } from "@styled-icons/boxicons-solid/Home";
import { Compass } from "@styled-icons/entypo/Compass";
import { CollectionPlay } from "@styled-icons/bootstrap/CollectionPlay";
import { LocalPlay } from "@styled-icons/material-outlined/LocalPlay";

// VIDEO ASSETS
import videoThumbnail from "./../assets/images/thumbnail.webp";
import videoThumbnail2 from "./../assets/images/missingu.jpg";
import videoThumbnail3 from "./../assets/images/thangdien.jpg";
import videoThumbnail4 from "./../assets/images/thichthich.jpg";
import userAvt from "./../assets/images/useravt.png";
import videoDemo from "./../assets/video/demovideo.mp4";

const sidebar = [
  {
    title: "Home",
    url: "/",
    icon: <Home className="icon" />,
  },
  {
    title: "Discover",
    url: "/explore",
    icon: <Compass className="icon" />,
  },
  {
    title: "Shorts",
    url: "/shorts",
    icon: <LocalPlay className="icon" />,
  },
  {
    title: "Channels",
    url: "/channels",
    icon: <CollectionPlay className="icon" />,
  },
];
const catbar = [
  {
    cat_title: "All",
    cat: "all",
  },
  {
    cat_title: "Game",
    cat: "game",
  },
  {
    cat_title: "Music",
    cat: "music",
  },
  {
    cat_title: "Live",
    cat: "live",
  },
];
const videos = [
  {
    // id: 1,
    thumbnail: videoThumbnail2,
    video: videoDemo,
    videourl: "#videourl",
    channel: {
      thumnail: userAvt,
      url: "#channelurl",
      name: "Channel Name",
    },
    title: "MISSING YOU - PHƯƠNG LY x TINLE (Official MV)",
    view: "50000000",
    timepublish: "24/10/1997",
    videoLength: "100",
  },
  {
    // id: 1,
    thumbnail: videoThumbnail3,
    video: videoDemo,
    videourl: "#videourl",
    channel: {
      thumnail: userAvt,
      url: "#channelurl",
      name: "Channel dasd as",
    },
    title: "THẰNG ĐIÊN | JUSTATEE x PHƯƠNG LY | OFFICIAL MV",
    view: "50000000",
    timepublish: "24/10/1997",
    videoLength: "100",
  },
  {
    // id: 1,
    thumbnail: videoThumbnail4,
    video: videoDemo,
    videourl: "#videourl",
    channel: {
      thumnail: userAvt,
      url: "#channelurl",
      name: "Channel Name 2",
    },
    title: "THICHTHICH - PHƯƠNG LY | OFFICIAL MV",
    view: "50000000",
    timepublish: "24/10/1997",
    videoLength: "100",
  },
  {
    // id: 1,
    thumbnail: videoThumbnail,
    video: videoDemo,
    videourl: "#videourl",
    channel: {
      thumnail: userAvt,
      url: "#channelurl",
      name: "Channel Name 3",
    },
    title: "Video title",
    view: "50000000",
    timepublish: "24/10/1997",
    videoLength: "100",
  },
  {
    // id: 1,
    thumbnail: videoThumbnail,
    video: videoDemo,
    videourl: "#videourl",
    channel: {
      thumnail: userAvt,
      url: "#channelurl",
      name: "Channel Name",
    },
    title: "Video title",
    view: "50000000",
    timepublish: "24/10/1997",
    videoLength: "100",
  },
  {
    // id: 1,
    thumbnail: videoThumbnail,
    video: videoDemo,
    videourl: "#videourl",
    channel: {
      thumnail: userAvt,
      url: "#channelurl",
      name: "Channel Name",
    },
    title: "Video title",
    view: "50000000",
    timepublish: "24/10/1997",
    videoLength: "100",
  },
  {
    // id: 1,
    thumbnail: videoThumbnail,
    video: videoDemo,
    videourl: "#videourl",
    channel: {
      thumnail: userAvt,
      url: "#channelurl",
      name: "Channel Name",
    },
    title: "Video title",
    view: "50000000",
    timepublish: "24/10/1997",
    videoLength: "100",
  },
  {
    // id: 1,
    thumbnail: videoThumbnail,
    video: videoDemo,
    videourl: "#videourl",
    channel: {
      thumnail: userAvt,
      url: "#channelurl",
      name: "Channel Name",
    },
    title: "Video title",
    view: "50000000",
    timepublish: "24/10/1997",
    videoLength: "100",
  },
  {
    // id: 1,
    thumbnail: videoThumbnail,
    video: videoDemo,
    videourl: "#videourl",
    channel: {
      thumnail: userAvt,
      url: "#channelurl",
      name: "Channel Name",
    },
    title: "Video title",
    view: "50000000",
    timepublish: "24/10/1997",
    videoLength: "100",
  },
];
export { sidebar, catbar, videos };
