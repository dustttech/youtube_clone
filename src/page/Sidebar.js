import React from "react";
import { sidebar } from "./../data";
import { Link } from "react-router-dom";

function Sidebar(props) {
  return (
    <div className="c-side-bar">
      {sidebar.map(({ title, url, icon }, id) => (
        <Link className="c-linkicon" key={id} to={url}>
          {icon} <span>{title}</span>
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;
