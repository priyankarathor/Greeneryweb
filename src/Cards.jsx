import React from 'react';
import {Link} from 'react-router-dom';
const Cards= () =>{
        return(
            <>
                <div className='container-fluid' id='trendcol' style={{padding:"40px"}}>
                    <div className='row'>
                    <div className='col-12'>
                                <h3 className='abouth1'>Balcony and Terrace Garden<br/><br/></h3>
                            </div>
                        <div className='col-3 col-s-12'>
                        <div class="card">
                        <img src="https://www.ugaoo.com/cdn/shop/files/DSC_0280.jpg?v=1704869229&width=375" alt="Denim Jeans" style={{width:"100%"}}/>
                        <p class="price">Bamboo Palm Plant</p>
                        <p>From   :    <i class="bi bi-currency-rupee"></i>399 </p>
                        <p><button> <Link  to="/Sellplant" style={{color:"#fff", textDecoration:"none"}}>Add To Card</Link>
                        </button></p>
                       </div>
                            </div>
                            <div className='col-3 col-s-12'>
                        <div class="card">
                        <img src="https://www.ugaoo.com/cdn/shop/files/DSC_82942.jpg?v=1696240355&width=375" alt="Denim Jeans" style={{width:"100%"}}/>
                        <p class="price">ZZ Plant</p>
                        <p>From   :    <i class="bi bi-currency-rupee"></i>599 </p>
                        <p><button> <Link  to="/Sellplant" style={{color:"#fff", textDecoration:"none"}}>Add To Card</Link>
                        </button></p>
                        </div>
                            </div>
                            <div className='col-3 col-s-12'>
                        <div class="card">
                        <img src="https://www.ugaoo.com/cdn/shop/files/Aimage_28dac659-d2ee-40fe-b988-4b039c33eb88.jpg?v=1699285338&width=375" alt="Denim Jeans" style={{width:"100%"}}/>
                        <p class="price">Areca Palm Plant</p>
                        <p>From   :    <i class="bi bi-currency-rupee"></i>250 </p>
                        <p><button> <Link  to="/Sellplant" style={{color:"#fff", textDecoration:"none"}}>Add To Card</Link>
                        </button></p>
                        </div>
                            </div>
                            <div className='col-3 col-s-12'>
                        <div class="card">
                        <img src="https://www.ugaoo.com/cdn/shop/files/3_95c81721-0beb-47c4-8eae-3efad6742baf.jpg?v=1706609191&width=375" alt="Denim Jeans" style={{width:"100%"}}/>
                        <p class="price">Ficus Lyrata Bambino -XL</p>
                        <p>From   :    <i class="bi bi-currency-rupee"></i>2999 </p>
                        <p><button> <Link  to="/Sellplant" style={{color:"#fff", textDecoration:"none"}}>Add To Card</Link>
                        </button></p>
                        </div>
                            </div>
                            </div>
                            </div>

            </>
        )
}

export default Cards;