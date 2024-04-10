import React from "react";
import Tdata from "./Tdata";

const Sellplant = () => {

  // let onhandalclick = () =>{
  //   window.location.reload()
  // }

  return (
    <div id="trendcol">
      <h2 style={{color:"#214c36"}}>Product List</h2>
      <div style={{ display: "flex", flexWrap: "wrap", margin:"10px"}}>
        {Tdata.ProductData.map((product) => (
          <div key={product.id} id="cardsrow">
            <img src={product.imgscr} alt={product.title} style={{ width: 220, height: 200, objectFit: "cover" }} />
            <p>{product.title}</p>
            <p>Price: ₹{product.price}</p>
            <a href={`/product/${product.id}`}><button className="btn btn-success"  >View Details</button></a>            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sellplant;
