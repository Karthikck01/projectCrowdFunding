import React from 'react';
import { Link } from 'react-router-dom';




const LandingPage = () => {
    return (
        <div className='text-gray-300 px-48 py-20  text-center drop-shadow-2xl'>
           <div>
            <p className='px-7'>
            Crowdfunding for disaster relief using blockchain is a relatively new concept that leverages the power of blockchain technology to create a more transparent and efficient way to raise funds for disaster relief efforts. Blockchain is a decentralized ledger technology that allows for secure and transparent transactions without the need for intermediaries.
<br/>
By using blockchain, crowdfunding for disaster relief can be more transparent and accountable, allowing donors to track their donations and ensure that they are being used for their intended purpose. It can also reduce the risk of fraud and corruption, as all transactions are recorded on the blockchain and can be audited.

</p>
           </div>
           <div className=' my-10 text-gray-900 '>
           <Link to={'/home'} className='p-3 bg-gray-300 rounded-full'>See All campaigns</Link>
           
           {/* <img src={'https://img.freepik.com/free-vector/crowd-funding-concept_3446-515.jpg?size=338&ext=jpg'} /> */}
           </div>
        </div>
    );
}

export default LandingPage;
