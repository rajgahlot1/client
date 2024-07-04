import React from "react";
import car from './Imgs/car.jpeg'
import { peopleImgs } from "./SuggestionData";
const Suggestion = () => {
  return (
    <div width
      style={{ height: "43", marginTop: "35px" }}
      className="suggestions"
    >
      <div className="d-flex"><img className="rounded-circle" style={{height:"44px",width:"44px"}} src={car} alt="" />
      <div className="naming">
        <div className="names d-flex flex-column " style={{marginLeft:"5px"}}><div style={{fontSize:"14px"}}>raj__gahlot</div>
        <div className="fw-light light-color" style={{fontSize:"12px"}}>Raj_Gahlot</div></div>
        <div className="text-primary me-4" >Switch</div>
      </div></div>
      <div className="d-flex mt-3 align-items-center justify-content-between"><div className="light-color" style={{fontSize:"14.5px"}}>Suggested for you</div><div className="me-4" style={{fontSize:"14px"}}>See all</div></div>
    
      <div className="d-flex flex-column">
      {peopleImgs.map((val,ind)=>{
        return(<div className="d-flex mt-3" key={ind}>
          <img className="rounded-circle" style={{height:"44px",width:"44px"}} src={val.img} alt="" />
          <div className="naming" >
        <div className="names d-flex flex-column " style={{marginLeft:"5px"}}><div style={{fontSize:"14px"}}>{val.id}</div>
        <div className="fw-light light-color" style={{fontSize:"12px"}}>Suggested for you</div></div>
        <div className="text-primary me-4" style={{fontSize:"13px"}}>Follow</div>
      </div></div>
        )
      })}</div>
      <p className="light-color2 mt-4" style={{fontSize:'11px'}}>About
Help
Press
API
Jobs
Privacy
Terms
Locations
Language
Meta Verified</p>
<p className="light-color2 mt-2" style={{fontSize:'11px'}}>© 2024 INSTAGRAM FROM META</p>
    </div>
  );
};

export default Suggestion;
