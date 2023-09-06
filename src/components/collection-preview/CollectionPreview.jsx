import React from "react";
import CollectionItem from "./../collection-item/CollectionItem";

import "./CollectionPreview.css";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...others }) => {
            // return <CollectionItem key={item.id}>{item.name}/></CollectionItem>;
            return <CollectionItem key={id} {...others} />;
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
