import React from "react";

const Footer = () =>{
            return(
                <>
              <div className='container-fluid' id='footer'>
                <br/>
                <br/>
                    <div className='row'>
                            <div className='col-3 col-s-6'>
                              <h3 className="trendp">Gardening Knowledge</h3>
                              <p >Blogs Plant Talk</p>
                              <p >Blog  Kitchen Gardening</p>
                              <p >Blogs  Top 10 Plants</p>
                              <p >Blogs  Sustainable Living</p>
                            </div>
                            <div className='col-3 col-s-6'>
                              <h3 className="trendp">Useful Links</h3>
                              <p >Orders</p>
                              <p >Wishlist</p>
                              <p >FAQ's</p>
                              <p >Offers</p>
                              <p >Rewards</p>
                            </div>
                            <div className='col-3 col-s-6'>
                              <h3 className="trendp">About</h3>
                              <p >About Nurserylive</p>
                              <p >Contact us</p>
                              <p >Privacy Policy</p>
                              <p >Shipping Policy</p>
                              <p >Terms of Service</p>
                            </div>
                            <div className='col-3 col-s-12 mb-3'>
                              <h3 className="trendp" >Follow Us</h3>
                              <i className="bi bi-facebook" id="iconf"></i>
                              <i className="bi bi-twitter"  id="iconf"></i>
                              <i className="bi bi-instagram"  id="iconf"></i>
                              <i className="bi bi-youtube"  id="iconf"></i>
                              <i className="bi bi-linkedin"  id="iconf"></i>
                            </div>
                            <div className="col-12 col-s-12" style={{background:"pink"}}>
                              <br/>
                             <h3 className="trendp" >Green Word Healthy life</h3>
                             <p>@Designed by <b>Priyanka</b> </p>
                            </div>
                            
                        </div>
                    </div>
                </>
            )
}

export default Footer;