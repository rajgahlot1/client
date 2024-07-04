import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate= useNavigate();
const [data,setdata]= useState({
  username:"",
  email:"",
  instaId:"",
  password:"",
})
const dataHandler=(e)=>{
const {name,value}=e.target;
console.log(name,value)
setdata({...data,[name]:value}) 
}
const submitHandler=async(e)=>{
  e.preventDefault()
  console.log(data)
  try {
    const response= await fetch(`http://localhost:5000/insta/register`,{
      method: "POST",
      headers:{"Content-Type":"application/json"},
       body: JSON.stringify(data)
    });
    if(response.ok){navigate("/client")}
    console.log(response)    
  } catch (error) {
    console.log("register",error)
  }
  }
  return (
    <>
      <div className="row mt-5 pe-5 p-sm-0 ">
        <div className="d-none d-sm-flex col flex-column align-items-center mt-5 pt-5">
          <h1 className="text-primary mt-5">Lamasocial</h1>
          <h5 className="text-center">Connect with friends and the world around you on Lamasocial.</h5>
        </div>
        <div className="col-12 col-sm-6 d-flex flex-column align-items-center mt-5 border border-dark pb-3 ms-4 me-5">
          <form className="d-flex flex-column w-100 " onSubmit={submitHandler}>
          <input style={{height:'35px'}} value={data.username} className="mt-4" placeholder="Username" name="username" onChange={dataHandler} type="text" />
          <input style={{height:'35px'}} value={data.email} className="mt-4" placeholder="Email" name="email" onChange={dataHandler} type="email" />
          <input style={{height:'35px'}} value={data.phone} className="mt-4" placeholder="Create Insta Id" name="instaId" onChange={dataHandler} type="text" />
          <input style={{height:'35px'}} value={data.password} className="mt-4" placeholder="Enter password" name="password" onChange={dataHandler} type="password" />
          <input style={{height:'35px'}}  className="mt-4 text-center btn btn-primary" type="Submit" value="Sign Up"/>
          </form>
<Link to="/client/login"><div className="btn btn-success mt-3">Log into another account</div></Link>
        </div>
      </div>
    </>
  );
};

export default Register;
