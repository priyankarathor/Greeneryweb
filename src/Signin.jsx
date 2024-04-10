import React from "react";
import Customerform from "./Customerform";

const Signin= () =>{
    return(
        <>
        {/* <!-- Button trigger modal --> */}
<button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" >
  Sign In 
</button>

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Join Us</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <Customerform/>
        </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default Signin;