import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(<>
       <div className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6 text-[#fff]">
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
             
            </Link> */}
            

       
          
    </div>
    </>);
}
export default Header;