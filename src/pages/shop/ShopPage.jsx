import React, { useState } from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";

import "./ShopPage.css";

const ShopPage = () => {
  const [items, setItems] = useState(SHOP_DATA);
  return (
    <div className="shop-page">
      {items.map(({ id, ...others }) => {
        return <CollectionPreview key={id} {...others} />;
      })}
    </div>
  );
};

export default ShopPage;
