import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

import { useStateContext } from '../context';
import {  CustomButton, FormField, Loader } from '../components';
import {  daysLeft } from '../utils';
import { profile } from '../assets';

const CampaignDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { donate, getDonations, contract, address } = useStateContext();

  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState('');
  const [donators, setDonators] = useState([]);

  const remainingDays = daysLeft(state.deadline);
  


  const fetchDonators = async () => {
    const data = await getDonations(state.pId);
    setDonators(data);
  }

  useEffect(() => {
    if(contract) fetchDonators();
  }, [contract, address])

  const handleDonate = async () => {
    setIsLoading(true);

    await donate(state.pId, amount);

    navigate('/home')
    setIsLoading(false);
  }

  return (
    <div className="campaign-details">
      {isLoading && <Loader />}
        
          <div className="img">
          <img src={state.image} id='img' alt="campaign" />
          <div className="count-box">
            <h3>Days Left: <span>{remainingDays}</span></h3>
            <h3>Amount Raised: <span>{state.amountCollected}</span></h3>
            <h3>Total donation: <span>{donators.length}</span></h3>
          </div>
          </div>
          
        
          
          <div>
            Created by : {state.ownername}  
          </div>
          <div>
          Campaign Address : {state.owner}
          </div>
          <div>
          Discription : {state.description}
          </div>
          <div>
          White Papers : <a href={state.doclink}>Click here..!</a>
          </div>
          <div className="fund-box fund-box-child">
          <div className='flex-col'>
              Donator
              
              {donators.length > 0 ? donators.map((item, index) => (
                  <div key={`${item.donator}-${index}`} >
                    
                    <p>{index + 1}. {item.donator} - {item.donation}</p>
                    
                    
                  </div>
                )) : (
                  <p>No donators yet. Be the first one!</p>
                )}
          </div>  
          <div className='fund-box-child-card'>
          <FormField
              labelName="Fund the campaign"
              inputType="number"
                placeholder="ETH 0.1"
                value={amount}
                handleChange={(e) => setAmount(e.target.value)}
              />
              <CustomButton
                btnType="button"
                title="Fund Campaign"
                handleClick={handleDonate}
              />
          </div>
              
        </div>
      </div>
      
  )
}

export default CampaignDetails
