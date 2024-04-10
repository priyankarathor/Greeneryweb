import React from "react";
import {Link} from "react-router-dom";

const Needmore = () =>{
  return(
    <>
              <div className='container-fluid' id='trendcol'>
                    <div className='row' id="Needmore">
                      <br/>
                        <div className='col-12'>
                                <h3 className='abouth1'>You may also need<br/><br/></h3>
                            </div>
                            <div className='col-3 col-s-6'>
                                <img src="https://nurserylive.com/cdn/shop/collections/1293b53e184dcb5dcd5b797a49f98d4d_310x310.jpg?v=1681381718" className='disimg'/>
                                <Link  to="/Sellplant" style={{textDecoration: "none"}}> <p className="trendp">Soil and Fertilizers</p></Link>
                            </div>
                            <div className='col-3 col-s-6'>
                                <img src="https://nurserylive.com/cdn/shop/collections/e60ae96dd692354824b4bc61aa7becbe_310x310.jpg?v=1681381448" className='disimg'/>
                                <Link  to="/Sellplant" style={{textDecoration: "none"}}> <p className="trendp">Planters</p></Link>
                            </div>
                            <div className='col-3 col-s-6'>
                                <img src="https://nurserylive.com/cdn/shop/collections/61ee7e1bd53cc58828079f3e2a3be9bd-647845_310x310.jpg?v=1681381453" className='disimg'/>
                                <Link  to="/Sellplant" style={{textDecoration: "none"}}><p className="trendp">Gardening Tools</p></Link>
                            </div>
                            <div className='col-3 col-s-6'>
                                <img src="https://nurserylive.com/cdn/shop/collections/nurserylive-seeds-category-imagejpg_310x310.jpg?v=1681381448" className='disimg'/>
                                <Link  to="/Sellplant" style={{textDecoration: "none"}}>  <p className="trendp">Seeds</p></Link>
                            </div>
                        </div>
                    </div>
    </>
  )
}
export default Needmore;