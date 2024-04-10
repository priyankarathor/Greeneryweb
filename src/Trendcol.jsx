import React from "react";
import {Link} from "react-router-dom";

const Trendcol = () =>{
  return(
    <>


              <div className='container-fluid' id='trendcol'>
                    <div className='row'>
                        <div className='col-12'>
                                <h3 className='abouth1'>Trending Collections<br/><br/></h3>
                            </div>
                            <div className='col-2 col-s-6'>
                                <img src="https://nurserylive.com/cdn/shop/collections/nurserylive-indoor-plants-category-image_200x200.jpg?v=1681381510" className='trendimg'/>
                              <Link  to="/Sellplant" style={{textDecoration: "none"}}><p className="trendp">Indoor Plants  </p></Link>
                      
                            </div>
                            <div className='col-2 col-s-6'>
                                <img src="https://nurserylive.com/cdn/shop/collections/nurserylive-flowering-plants-category-image-505581_200x200.jpg?v=1681381493" className='trendimg'/>
                                <Link  to="/Sellplant" style={{textDecoration: "none"}}><p className="trendp">Flowering Plants</p></Link>
                            </div>
                            <div className='col-2 col-s-6'>
                                <img src="https://nurserylive.com/cdn/shop/collections/nurserylive-lucky-bamboos-category-image_200x200.jpg?v=1681381465" className='trendimg'/>
                                <Link  to="/Sellplant" style={{textDecoration: "none"}}><p className="trendp">Lucky Bamboo</p></Link>
                            </div>
                            <div className='col-2 col-s-6'>
                                <img src="https://nurserylive.com/cdn/shop/collections/nurserylive-cactus-and-succulents-collection-image_200x200.jpg?v=1681381872" className='trendimg'/>
                                <Link  to="/Sellplant" style={{textDecoration: "none"}}><p className="trendp">Cactus and Succulents</p></Link>
                            </div>
                            <div className='col-2 col-s-6'>
                                <img src="https://nurserylive.com/cdn/shop/collections/3c2267783439b595a935f3fc06ed698d_200x200.jpg?v=1681381523" className='trendimg'/>
                                <Link  to="/Sellplant" style={{textDecoration: "none"}}><p className="trendp">Bonsai Plants</p></Link>
                            </div>
                            <div className='col-2 col-s-6'>
                                <img src="https://nurserylive.com/cdn/shop/collections/nurserylive-aromatic-fragrant-plants-category-image-380980_200x200.jpg?v=1681381460" className='trendimg'/>
                                <Link  to="/Sellplant" style={{textDecoration: "none"}}> <p className="trendp">Aromatic Fragrant Plants</p></Link>
                            </div>
                           
                        </div>
                    </div>
    </>
  )
}
export default Trendcol;

