import React from 'react'
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
const Login = () => {
  const navigate= useNavigate();
  const [data,setdata]= useState({ 
    instaId:"",
    password:"",
  })
  const dataHandler=(e)=>{
  const {name,value}=e.target;
  setdata({...data,[name]:value}) 
  }
  const submitHandler= async(e)=>{
    e.preventDefault()
    console.log(data)
    try {
      const response= await fetch("http://localhost:5000/insta/login",{
        method: "POST",
      headers:{"Content-Type":"application/json"},
       body: JSON.stringify(data)
      });
      console.log(response);
      if(response.ok)(navigate('/client'))
    } catch (error) {
      console.log(error)
      
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
        <form className="d-flex flex-column w-100 ">
        <input style={{height:'35px'}} value={data.instaId} className="mt-4" placeholder="enter instaId" name="instaId" onChange={dataHandler} type="text" />
        <input style={{height:'35px'}} value={data.password} className="mt-4" placeholder="Password" name="password" onChange={dataHandler} type="password" />
        <div style={{height:'35px'}}  className="mt-4 text-center btn btn-primary" onClick={submitHandler} type="Submit" >Login</div>
        </form>
<Link to="/social_media/register"><div className="btn btn-success mt-3">Register</div></Link>
      </div>
    </div>
  </>
  )
}

export default Login