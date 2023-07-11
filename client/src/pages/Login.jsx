import React from 'react';
import { FormField,CustomButton } from '../components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Axios from 'axios';



const Login=()=>{
    const navigate = useNavigate();
   

    const [loginStatus, setLoginStatus] = useState();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    
      const handleSubmit = async (e) => {
        e.preventDefault();
      
        Axios.post("http://localhost:3001/login", {
          username: username,
          password: password
        }).then((response) => {
          if(response.data.message){
            setLoginStatus(response.data.message);
          }else{
            setLoginStatus(response.data[0].email);
            alert("Login success")
            navigate('/home');
          }
        })

      }

      

        return (
              <div className="input-form">
              <form onSubmit={handleSubmit} >
                <h1 className="heading">Login</h1>
                    <FormField
                       labelName="UserId*"
                       placeholder="sample@gmail.com"
                       inputType="text"
                       value={username}
                       handleChange={(e) => {setUsername(e.target.value)}}
                      />
                     <FormField
                       labelName="Password"
                       placeholder="Pass@#123"
                       inputType="password"
                       value={password}
                       handleChange={(e) => {setPassword(e.target.value)}}
                      />
                      <span className='danger'>{loginStatus}</span>

                      <div className='justify-evenly'>
                      <p>No Account <Link to="/signup" className='link'>Sign-up</Link></p>
                      <CustomButton
                       btnType="submit"
                       title="Sign-in"
                       />

                      </div>
                    </form>
                  </div>



       
        )
    }


export default Login;
