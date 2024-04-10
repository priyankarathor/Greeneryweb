import React from "react";
import { Link } from "react-router-dom";

const Product = ({ id, imgSrc, title, price, showDetailsLink = true }) => {
  return (
    <div style={{ margin: 15, padding: 15, border: "1px solid #ccc" }}>
      <img src={imgSrc} alt={title} style={{ width: 300, height: 300, objectFit: "cover" }} />
      <p>{title}</p>
      <p>Price: ₹{price}</p>
      {showDetailsLink && <Link to={`/product/${id}`}>View Details</Link>}
    </div>
  );
};

export default Product;
