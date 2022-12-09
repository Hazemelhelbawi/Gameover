import axios from "axios";
import Joi from "joi";
import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import FormImage from "../../assests/Images/gaming.ebaf2ffc84f4451d.jpg";
import HomeImage from "../../assests/Images/logo.png";
import {Helmet} from "react-helmet";
import './Login.css'
export default function Login({saveUser}) {
  const [loading,setLoading]=useState(true)
  const [errorMsg,setErrorMsg]=useState('')
  const [validationError,setvalidationError]=useState([])

  let navigate = useNavigate()
let [user,setUser]=useState({
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
    let {data}= await axios.post('https://sticky-note-fe.vercel.app/signin',user)
  let respone = data        
  
  if (respone.message==='success'){
    localStorage.setItem('token',data.token);
    saveUser();

      navigate('/')
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
      password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

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
                <title>Login</title>
            </Helmet>
      <div className="container">
        <div className="row formRegisterBackGround  pt-2 mt-4 ">
          <div className="col-md-6">
            <div className="imageForm">
              <img src={FormImage} className="img-fluid " alt="" />
            </div>
          </div>
          <div className="col-md-6">
          <div className="imageFormLogin w-25  m-auto">
<img src={HomeImage} className='w-100' alt="" />

</div>
<h2 className="text-center py-2 text-muted">Log in to GameOver</h2>
            {errorMsg?<div className="alert alert-danger">
                    {errorMsg?.email?.message}
                </div>:'' }
            <form  onSubmit={(e)=>register(e)}
             className="form ">





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
                  <button className="btn btn-secondary  border-dark w-100">{loading?`Login`:<i className="fas fa-spinner fa-spin " ></i>}</button>
                  </div>
              <div className="text-center pt-1 pb-3">
              Not a member yet? <Link to='/register'>Create Account</Link>
              </div>
      
            </form>

         
          </div>
        </div>
      </div>
    </>
  );
}
