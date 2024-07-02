import './insta.css'
import 'bootstrap/dist/css/bootstrap.css';
import insta from "./Imgs/logo.png";
import { MdOutlineExplore, MdHomeFilled } from "react-icons/md";
import { AiOutlineSearch} from 'react-icons/ai';
import { SiYoutubeshorts } from "react-icons/si";
import { FaRegHeart,FaThreads,FaInstagram } from "react-icons/fa6";
import { RiMessengerLine } from "react-icons/ri";
import { LuPlusSquare } from "react-icons/lu";
import { PiList } from "react-icons/pi";
import profile from './Imgs/profile.jpg'

const Insta = () => {
    const iconArray = [
        { label: 'Home', icon: <MdHomeFilled size={20}  /> },
        { label: 'Search', icon: <AiOutlineSearch size={20} /> },
        { label: 'Explore', icon: <MdOutlineExplore size={20}  /> },
        { label: 'Reels', icon: <SiYoutubeshorts size={20}  /> },
        { label: 'Messenger', icon: <RiMessengerLine size={20} /> },
        { label: 'Love', icon: < FaRegHeart size={20} /> },
        { label: 'Create', icon: <LuPlusSquare size={20} /> }
      ]; 
    return (
    <div  id="slideBar">
      <div className="allIcon m-2"><div className="p-2 ps-2 d-xl-none"><FaInstagram size={20}/></div>
        <img src={insta} className="d-none d-xl-inline" style={{height:'70px',width:'160px'}} alt="" />
      </div>
      <div>
        {iconArray.map((val,ind)=>{
            return (
              <div  key={ind} className="allIcon m-2">
                <div className="p-2">
                {val.icon}
                <span className="ps-2 d-none d-xl-inline">{val.label}</span>
              </div>
              </div>
            )
        })}
          <div className="p-2 ps-0 pt-2 pb-2 ms-2 me-2  allIcon">
            <img className="rounded-circle ms-2" style={{ width:"20px", height:"20px"}} src={profile} alt="" />
                <span className="ps-2 d-none d-xl-inline">Profile</span>
             

              </div>
       </div>
       <div style={{position:'absolute', bottom:'0px',width:'100%'}}>
       <div className="allIcon m-2 p-2">
                <FaThreads size={20}/>
                <span className="p-2 ps-2 d-none d-xl-inline">Threads</span>
              </div>
              <div className=" allIcon m-2 p-2">
                <PiList size={20}/>
                <span className="p-2 ps-2 d-none d-xl-inline">More</span>
              </div>
       </div>
    </div>
  );
};

export default Insta;
