import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { profile } from '../assets';

import { useStateContext } from '../context';
import { CustomButton } from './';


const Navbar = () => {
  
  const navigate = useNavigate();
  
  const { connect, address } = useStateContext();

  return (
    <header>
    
      <div><h1>CROWD FUNDING</h1></div>
      

      <div className="justify-evenly">
        <CustomButton 
          btnType="button"
          title={address ? 'Create a campaign' : 'Connect'}
          styles={address ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
          handleClick={() => {
            if(address) navigate('create-campaign')
            else connect()
          }}
        />
         <Link to="/profile">
          <div className="">
            <img src={profile} alt="user" className=""/>
          </div>
        </Link>
 
      </div>

      
  
    </header>
  )
}

export default Navbar