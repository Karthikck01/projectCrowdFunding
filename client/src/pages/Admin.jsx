import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Navbar,Header } from './components';
import { CampaignDetails, CreateCampaign, Home, Profile, LandingPage, About} from './pages';
import Login from './pages/Login';

const Admin = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
     

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />
        <Header/>

       
            Admin
      </div>
    </div>
  )
}

export default Admin