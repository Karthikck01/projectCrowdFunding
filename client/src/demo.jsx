// it just a Sample pade
import Axios from 'axios';
import  React, { useState } from 'react';
import { profile } from './assets';
import demoCard from './demo2';
import { Profile } from './pages';

const Demo = () => {
    const [username,setUserName]=useState("testName")
    const [email,setEmail]=useState('testemail@gamil.com')
    const [password,setPassword]=useState('testpass')
    

    const [rs, setrs] = useState('rs');
    const [ls, setls] = useState('ls');

 

    function register(){
        console.log('regis')
        Axios.post('http://localhost:3001/register',{
            email:email,
            username:username,
            password:password
        }).then((response)=>{
            if (response.data.message) {
                setrs(response.data.message);
            } else {
                setrs("success");
            }
        })
    }
    function Login(){
        console.log('login')
        Axios.post('http://localhost:3001/login',{
            username:username,
            password:password
        }).then((response)=>{
            if (response.data.message) {
                setls(response.data.message);
            } else {
                setls("success");
            }
        })
    }
   
   
    return (
        <div className='text-gray-300'>
            Demo hello
          {ls}
          <br/>

            {username}  <br/>
            {email}  <br/>
            {password}  <br/>

            <br/>
            {rs}
            
            
            <button onClick={register} className="btn">register</button>
            <button onClick={Login} className="btn">Login</button>

            <demoCard owner="kdmddmk" title="title" description="discription" target="39" amountCollected="3" image={profile}/>

          
        </div>
    );
}

export default Demo;
