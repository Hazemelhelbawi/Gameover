import axios from "axios";
import Joi from "joi";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import FormImage from "../../assests/Images/gaming.ebaf2ffc84f4451d.jpg";
import './Register.css'
import {Helmet} from "react-helmet";


export default function Register() {
  const [loading,setLoading]=useState(true)
  const [errorMsg,setErrorMsg]=useState('')
  const [validationError,setvalidationError]=useState([])
  let navigate = useNavigate()
let [user,setUser]=useState({
  first_name:"",
  last_name:"",
  age:'',
  email:"",
  password:""

})
function getUserInfo(e){
console.log(e.target.value);
let currentUser = {...user};
currentUser[e.target.name]=e.target.value
setUser(currentUser)
console.log(currentUser);
}

async function register(e) {
  setLoading(false)
  e.preventDefault()
  if(validationUser()){
 let {data}= await axios.post('https:/sticky-note-fe.vercel.app/signup',user)
  let respone = data        
  
  if (respone.message==='success'){
      navigate('/login')
      // setLoading(true)

  }
  else{
      setLoading(false)
      setErrorMsg(respone.errors)
  }
}
}


console.log(errorMsg);

function validationUser(){
  let schema = Joi.object({
      first_name: Joi.string().alphanum().min(3).max(30).required().messages({
        "string.empty":"first name is required",
        "string.min":"first name is required"
      }),
      last_name: Joi.string().alphanum().min(3).max(30).required().messages({
        "string.empty":"last name is required",
        "string.min":"last name is required"
      }),
      password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
      age: Joi.number().min(15).max(60).required(),

  });
  let res =schema.validate(user,{abortEarly:false})
  if(res.error){
      console.log(res);
      setvalidationError(res.error.details)
      return false
  }else{
      return true
  }
}


  return (
    <>
                <Helmet>
                <meta charSet="utf-8" />
                <title>Register</title>
            </Helmet>
      <div className="container">
        <div className="row formRegisterBackGround pt-2 mt-4">
          <div className="col-md-6">
            <div className="imageForm">
              <img src={FormImage} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <h2 className="text-center py-2 text-muted">Create My Account!</h2>
            {errorMsg?<div className="alert alert-danger">
                    {errorMsg?.email?.message}
                </div>:'' }
            <form  onSubmit={(e)=>register(e)}
             className="form ">



              <div className="d-flex justify-content-between py-1">
                <input onChange={(e)=>getUserInfo(e)}
                  className="form-control bg-dark me-2 border-dark border border-1 text-white w-75 "
                  id="first_name"
                  name="first_name"
                  type="text"
                  placeholder="First Name"
                />

                <input onChange={(e)=>getUserInfo(e)}
                  className="form-control bg-dark ms-2 border-dark border border-1 text-white w-75"
                  id="last_name"
                  name="last_name"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div className="d-flex justify-content-between text-danger">
              {/* {validationError && (<div className="text-danger alert alert-danger me-2"> {validationError.filter((ele)=>ele.context.label=='first_name')[0]?.message} </div>)} */}
              <div>
              {validationError.filter((ele)=>ele.context.label==='first_name')[0]?.message}

              </div>
              <div>
              {validationError.filter((ele)=>ele.context.label==='last_name')[0]?.message}

              </div>
              {/* validationError.filter((ele)=>ele.context.label=='first_name')[0]?.message} */}
{/* {              <h6 className="text-danger alert alert-danger me-2"> {validationError.filter((ele)=>ele.context.label=='first_name')[0]?.message}:</h6>  */}
             {/* <h6 className="text-danger alert alert-danger ms-2"> {validationError.filter((ele)=>ele.context.label=='last_name')[0]?.message} </h6> */}
              </div>
              <div className="form-group py-1">
                <input onChange={(e)=>getUserInfo(e)}
                  className="form-control bg-dark border-dark border border-1 text-white"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                />
                {/* <h6 className="text-danger alert alert-danger">{validationError.filter((ele)=>ele.context.label=='email')[0]?.message}</h6> */}
             <div className="text-danger">
             {validationError.filter((ele)=>ele.context.label==='email')[0]?.message}

             </div>
              </div>
              <div className="form-group py-1">
                <input onChange={(e)=>getUserInfo(e)}
                  className="form-control bg-dark border-dark border border-1 text-white"
                  type="number"
                  name="age"
                  id="age"
                  placeholder="age"
                />
             {/* <h6 className="text-danger alert alert-danger">   {validationError.filter((ele)=>ele.context.label=='age')[0]?.message}</h6> */}
             <div className="text-danger">

             {validationError.filter((ele)=>ele.context.label==='age')[0]?.message}
              </div>
              </div>
              <div className="form-group py-1">
                <input onChange={(e)=>getUserInfo(e)}
                  className="form-control bg-dark border-dark border border-1 text-white"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
              {/* <h6 className="text-danger alert alert-danger">  {validationError.filter((ele)=>ele.context.label=='password')[0]?.message}</h6> */}
              <div className="text-danger">

              {validationError.filter((ele)=>ele.context.label==='password')[0]?.message}
            
              </div>
              </div>
                  <div className="py-2">
                  <button className="btn btn-secondary  border-dark w-100">{loading?`Create Account`:<i className="fas fa-spinner fa-spin " ></i>}</button>
                  </div>
                  <p className="py-2 text-center border-0 border-bottom">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
              <div className="text-center pt-1 pb-3">
              Already a member? <Link to='/login'>Log in</Link>
              </div>
      
            </form>

         
          </div>
        </div>
      </div>
    </>
  );
}
