import React, { useEffect, useState  } from "react";
import { useParams} from "react-router-dom";
import Tdata from "./Tdata";

const Payment = () => {
    let state = useState();


    const [pageURL, setPageURL] = useState(0);
    let [num , setnum] = useState(0);

    const IncNum = () =>{
        setnum(num++);
    }
    

    useEffect(() => {
      let a = window.location.href; 
      console.log("==>",a);
      let b = a.split("/");
      console.log("======>",b[4])
      setPageURL(b[4]);
    });

  console.log('display data');
  const { id } = useParams();
  // const productId = parseInt(id); // Convert id to integer
  console.log("Raw ID from URL:", id);

  // let a = window.location.href; 
  // console.log("==>",a);
  // let b = a.split("/");
  // console.log("======>",b[4])

  

  const findProductById = (productId) => {
    console.log("filter Id==>",productId);
    return Tdata.ProductData.find((product) => product.id == productId);
  };
  
  // Usage:
  const productId = pageURL; 
  
  // const productId = b[4];  
  console.log("product Id ==>",productId);
  const product = findProductById(productId);

  // Debugging statements
  // console.log("Requested Product ID:", id);
  console.log("Parsed Product ID:", productId);
  console.log("Product Data:", product);

  // let finalprice = ;

  const onclickhandle = () =>{
    alert("Order Book Thank You ")
  
  }

  // Render product details if found, otherwise show a message
  if (product) {
    return (
      <div style={{backgroundColor:"white",padding:"20px"}}>
        <h2 style={{color:"#214C36"}}>Product Details</h2>
        <div className="container-fluid" style={{padding:"20px", textAlign:"center"}}>
          <div className="row">
            <div className="col-5 col-s-12">
          <img
            src={product.imgscr}
            alt={product.title}
            style={{ width: 310, height: 300, objectFit: "cover", border:"1px solid palevioletred", borderRadius:"20px", padding:"10px" }}
          />
          </div>
          <div className="col-7 col-s-12">
          <h3>{product.title}</h3>
          <p>   <h5> Quantity {num} </h5>  Price: ₹{product.price}</p>
          
          <p>Final Price = {product.price *num}</p>
        
          <div>

          <button onClick={IncNum}  className="btn btn-success">+</button>&nbsp;&nbsp;
          <button className="btn btn-success" onClick={()=>{onclickhandle()}}>Submit</button>
          
          </div>
          </div>
          {/* Add more details here if needed */}
        </div>
        </div>
      </div>
    );
  } 
};

export default Payment;
