import React, { useState } from 'react';
import * as emailjs from "emailjs-com";
import axios from "axios";

axios.defaults.baseURL ="http://localhost:8000/"

const Customerform = () =>{
    const[name,setname] = useState("");
    const[Email,setemail] = useState("");

    function Sendemail(){
        const Data ={
            to_name:name,
            to_email:Email,
        }
        const Servise_Id = "service_woyedfp";
        const Template_Id = "template_azlqiis";
        const User_id = "-8djhaYU3mmxGbbv7";

        emailjs.send(Servise_Id,Template_Id,Data,User_id).then(
            function(response){
                alert("msg send successfully")
            },
            function(error){
                console.log(error);
            }
        )
    }
    const[fromData,setfromData] = useState(
        {
            name : "",
            email : "",
            subject : "",
            message : ""
        }
    )
    const handleOnchange = (e) =>{
        const {value,name,subject,message} = e.target 
        setfromData((preve)=>{
            return{
                ...preve,
                [name] : value,
            }
        })
    }
  

    const handleSubmit = async(e) => {
        e.preventDefault();
    
        // Submit the form data
        const response = await axios.post("/create", fromData);
        console.log(response);
    
        // Clear form fields
        setname("");
        setemail("");
        setfromData({
            name: "",
            email: "",
            subject: "",
            message: ""
        });
    }



        return(
            <>


            <div className='container-fluid ' id='trendcol'>
                <div className='container' style={{padding:"40px"}}>
                  <div className='row'>
                      <div className='col-5 col-s-12'>
                        <img src="https://assets.vogue.com/photos/5c8ff73ac712fa2de624c06d/master/w_1600%2Cc_limit/01-boys-with-plants-book.jpg" alt='plants'className='formimg'/>
                        </div>
                        <div className='col-7 col-s-12'>
                            <br/>
                        <form  onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Enter Your Name</label>
                            <input 
                                type="text" 
                                name="name"
                                class="form-control" 
                                id="exampleInputEmail1" 
                                aria-describedby="emailHelp" 
                                value={name} 
                                onChange={(e) => {
                                    setname(e.target.value); 
                                    handleOnchange(e); 
                                }}  
                            />
                                
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            
                              <input
                                        type="email"
                                        name="email"
                                        class="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        value={Email}
                                        onChange={(e) => {
                                            setemail(e.target.value);
                                            handleOnchange(e);
                                        }}
                                    />

                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Subject</label>
                            <input type="text" name="subject" class="form-control"
                            id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleOnchange}/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Message</label>
                            <textarea class="form-control" name="message" placeholder="Leave a comment here"  id="floatingTextarea2"  style={{height:"100px"}} onChange={handleOnchange}></textarea>
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" class="btn btn-success" onClick={()=>{Sendemail()}}>Submit</button>
                        </form>
                        <br/>
                        </div>
                        </div>
                        </div>
                        </div>
            </>
        )
}

export default Customerform;