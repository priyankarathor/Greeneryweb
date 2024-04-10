import React from "react";
import Tdata  from "./Tdata";

const Timage =(props) => {
    return(
        <img src={props.imgscr} alt="first" style={{width:"250px",height:"250px"}} className='img_name'/>
    );
}

export default Timage;