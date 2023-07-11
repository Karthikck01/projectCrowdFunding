import React from 'react';

import {  profile } from '../assets';
import { daysLeft } from '../utils';

const FundCard = ({ownername, owner, title, description, target, deadline, amountCollected, image, handleClick }) => {
  const remainingDays = daysLeft(deadline);

  return (
    <div onClick={handleClick} className='campaign-card'>

      <div className="img-box">
      <img src={image} alt="fund" className=" "/>
      </div>



<div className="content-box">
        <div className="">
          <p className="">We need your Help!</p>
        </div>

        <div className="block">
          <h3 >{title}</h3>
        </div>
        <div>
        <img src={profile} alt="user" />
           created by : {ownername}
        </div>
       
          <div >
            
            <p ><h4 >{amountCollected}</h4>Raised of {target}</p>
          </div>
          <div >
            
            <p ><h4 >{remainingDays}</h4> Days Left</p>
          </div>
      </div>
</div>


  )
}

export default FundCard
