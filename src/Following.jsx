import React from 'react'
import {peopleImgs} from './SuggestionData'
import './insta.css'
const Following = () => {
  return (
    <div className="followings text-white w-100 gap-4 d-flex align-items-around justify-content-around p-2" style={{maxWidth:"530px", overflowX:"hidden"}}>
{peopleImgs.map((val,ind)=>{
  return(
  <div key={ind} className='d-flex flex-column align-items-center'><div className="position-relative  h-100 w-100"><img className='rounded-circle' style={{height:"56px", width:"56px", border:"2px solid white"}} src={val.img} alt="" /></div><p className='text-dark' style={{fontSize:"13px",width:"60px",height:"30px", overflow:"hidden"}}>{val.id}</p></div>
  )
})}
    </div>
  )
}

export default Following