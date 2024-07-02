import React, { useState } from "react";
import './insta.css'
import 'bootstrap/dist/css/bootstrap.css';
import insta from "./Imgs/logo.png";
import { useEffect } from "react";
import { MdOutlineExplore, MdHomeFilled } from "react-icons/md";
import { AiOutlineSearch} from 'react-icons/ai';
import { SiYoutubeshorts } from "react-icons/si";
import { FaRegHeart,FaThreads,FaInstagram } from "react-icons/fa6";
import { RiMessengerLine } from "react-icons/ri";
import { LuPlusSquare } from "react-icons/lu";
import { PiList } from "react-icons/pi";
import profile from './Imgs/profile.jpg'

const Insta = () => {
const [size,setsize]= useState(30)
useEffect(() => {
    const handleResize = () => {
    window.matchMedia('(max-width: 1200px)').matches? setsize(25): setsize(30)
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    const iconArray = [
        { label: 'Home', icon: <MdHomeFilled size={size}  /> },
        { label: 'Search', icon: <AiOutlineSearch size={size} /> },
        { label: 'Explore', icon: <MdOutlineExplore size={size}  /> },
        { label: 'Reels', icon: <SiYoutubeshorts size={size}  /> },
        { label: 'Messenger', icon: <RiMessengerLine size={size} /> },
        { label: 'Love', icon: < FaRegHeart size={size} /> },
        { label: 'Create', icon: <LuPlusSquare size={size} /> }
      ]; 
    return (
    <div  id="slideBar">
      <div className="ps-2 allIcon m-2"><div className="p-3 ps-2 d-xl-none"><FaInstagram size={size}/></div>
        <img src={insta} className="d-none d-xl-inline" style={{height:'70px',width:'160px'}} alt="" />
      </div>
      <div>
        {iconArray.map((val,ind)=>{
            return (
              <div  key={ind} className="allIcon m-2">
                <div className="p-3">
                {val.icon}
                <span className="ps-2 d-none d-xl-inline">{val.label}</span>
              </div>
              </div>
            )
        })}
          <div className="p-2 pt-3 pb-3 ms-2 me-2  allIcon">
            <img className="rounded-circle ms-2" style={{ width: `${size}px`, height: `${size}px` }} src={profile} alt="" />
                <span className="ps-2 d-none d-xl-inline">Profile</span>
             

              </div>
       </div>
       <div style={{position:'absolute', bottom:'0px',width:'100%'}}>
       <div className="p-3 allIcon m-2">
                <FaThreads size={size}/>
                <span className="ps-2 d-none d-xl-inline">Threads</span>
              </div>
              <div className="p-3 allIcon m-2">
                <PiList size={size}/>
                <span className="ps-2 d-none d-xl-inline">More</span>
              </div>
       </div>
    </div>
  );
};

export default Insta;
