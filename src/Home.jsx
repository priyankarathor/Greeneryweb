import React from "react";
import Headermid from "./Headermid";
import Aboutus from "./Aboutus";
import Cards from "./Cards";
import Trendcol from "./Trendcol";
import Discount from "./Discount";
import Needmore from "./Needmore";
import Customerform from './Customerform';

const Home = () =>{
        return(
            <>
                <Headermid/>
                <Aboutus/>
                <Cards/>
                <Trendcol/>
                <Discount/>
                <Needmore/>
                <Customerform/>
            </>
        )
}

export default Home;
