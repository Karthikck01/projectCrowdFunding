import React from 'react';
import { CustomButton,FormField } from '../components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [fname,setFname]=useState("");
    const [lname,setLname]=useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpass,setConfirmpass]=useState("");
    const [phone,setPhone]=useState(0);
    const [username, setUsername] = useState("");

    const [registerStatus, setRegisterStatus] = useState("");
    const [invalid,setInvalid]=useState();
    

    const nav = useNavigate();

    
      const handleSubmit = async (e) => {
        e.preventDefault();

        if(password==confirmpass){
           

            Axios.post("http://localhost:3001/register", {
                fname: fname,
                lname: lname,
                phone: phone,
                email: email,
                username: username,
                password: password,
              }).then((response) => {
            
                if(response.data.message){
                  setRegisterStatus(response.data.message);
                }else{
                  setRegisterStatus("ACCOUNT CREATED SUCCESSFULLY");
                  alert('ACCOUNT CREATED SUCCESSFULLY')
                  nav('/login');
                }
              })

            setInvalid('')

        }else{
            setInvalid('password does not match')
        }
      }

    return (
        
            <div className="input-form">
              
              <form onSubmit={handleSubmit}>
                  
                  <h1 className="heading">Signup</h1>

                      <FormField
                       labelName="First Name"
                       placeholder="First Name"
                       inputType="text"
                       value={fname}
                       handleChange={(e) => {setFname(e.target.value)}}
                      />
                      <FormField
                       labelName="Last Name"
                       placeholder="Last Name"
                       inputType="text"
                       value={lname}
                       handleChange={(e) => {setLname(e.target.value)}}
                      />
                      <FormField
                       labelName="Email*"
                       placeholder="sample@gmail.com"
                       inputType="email"
                       value={email}
                       handleChange={(e) => {setEmail(e.target.value)
                        setUsername(e.target.value)}}
                      />
                      <FormField
                       labelName="Password"
                       placeholder="Pass@#123"
                       inputType="password"
                       value={password}
                       handleChange={(e) => {setPassword(e.target.value)}}
                      />
                      <p className='danger'>{invalid}</p>
                      <FormField
                       labelName="Confirm Password"
                       placeholder="Pass@#123"
                       inputType="password"
                       value={confirmpass}
                       handleChange={(e) => {setConfirmpass(e.target.value)}}
                      />
                      <FormField
                       labelName="Phone No"
                       placeholder="+91XXXXXXX564"
                       inputType="number"
                       value={phone}
                       handleChange={(e) => {setPhone(e.target.value)}}
                      />
                      
                     
                      <div className='justify-evenly'>
                      <p className='text-gray-200'>Already Register <Link to="/login" className='link'>Sign-in</Link></p>
                      <CustomButton
                       btnType="submit"
                       title="Sign-up"
                       styles="bt-bg "
                      />
                        {registerStatus}
                      </div>
                      

                      </form>
              </div>
        
    );
}

export default Signup;
