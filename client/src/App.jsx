import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Navbar,Header } from './components';
import { CampaignDetails, CreateCampaign, Home, Profile, LandingPage, About} from './pages';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Sidebar from './components/SideBar';
import Demo from './demo';

const App = () => {
  return (
    <div className="app">
 <Navbar />

      <div className="container">
       

        
        <Routes>

        <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/donate-campaign" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/demo" element={<Demo/>}/>
        </Routes>


      </div>
    </div>
  )
}

export default App
