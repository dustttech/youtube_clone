import React from "react";
import { catbar } from "./../data";
function CategoriesBar(props) {
  return (
    <div className="c-categories-bar">
      {catbar.map(({ cat_title, cat }, index) => (
        <a key={index} href={`#${cat}`}>
          {cat_title}
        </a>
      ))}
    </div>
  );
}

export default CategoriesBar;
