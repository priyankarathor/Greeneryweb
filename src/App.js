import React from "react";
import './index.css';
import {Routes,Route} from 'react-router-dom'
import Header from "./Header";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import Sellplant from "./Sellplant";
import Payment from "./Payment";
import Top from "./Top";

const App = () =>{
  return(
    <>
      <Header/>
      <Navbar/>
         <Routes>
          <Route exact path='/' Component={Home}/>
          <Route path="/Sellplant" Component={Sellplant}/>
          <Route path="/product/:id" component={Payment} />
        </Routes>
        <Top/>
        <Payment/>
        <Footer/>
    </>
  )
}
export default App;
