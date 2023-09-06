import React from "react";
import { Link } from "react-router-dom";

import "./MenuItem.css";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  return (
    <Link to={`/${linkUrl}`} className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </Link>
  );
};

export default MenuItem;
