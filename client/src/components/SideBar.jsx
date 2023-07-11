import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => {
   
  
    return (
      <div className="">
         <p className=''>Ack</p>
  
        <div className="">
          <div className="">
          <Link to={"/"}>
                Home
            </Link>
            
            <Link 
            
            to={"/create-campaign"}>
            Create-campaign
            </Link>
            <Link to={"/donate-campaign"}>
             Donate-Campaign
            </Link>
            <Link to={"/profile"}>
            Your-Campaign
            </Link>
            {/* <Link to={"/about"}>
             About
            </Link> */}
            <Link to={"/login"}>
             Login
            </Link>
            <Link to={"/signup"}>
             signup
            </Link>

          </div>
  
         
        </div>
      </div>
    )
  }
  
  export default Sidebar
