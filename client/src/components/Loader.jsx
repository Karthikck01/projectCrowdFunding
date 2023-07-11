import React from 'react'

import { loader } from '../assets';

const Loader = () => {
  return (
    <div className='loader'>
      <img src={loader} alt="loader" className=""/>
      <p className="">Transaction is in progress <br /> Please wait...</p>
    </div>
  )
}

export default Loader