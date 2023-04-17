import React from 'react';
import {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import HR from "../images/HR.gif"


export default function SignUp() {

  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Toast Functions
  const notifyError=(msg)=> toast.error(msg);
  const notifySuccess=(msg)=> toast.success(msg);

  //Email and Password Regex
  const emailRegex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passwordRegex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;


  const postData=()=>{

    //Checking email and password
    if(!emailRegex.test(email))
    {
        notifyError("Empty Fields are not allowed");
        return
    }
    else if(!passwordRegex.test(password))
    {
        notifyError("Password must contain atleast eight characters, including atleast one number and includes both lower and upper case letters and special characters");
        return
    }

    //Sending Data To Server
    fetch("http://localhost:8080/auth/signup",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            
            userName: userName,
            email: email,
            password: password

        })
    }).then(res=>res.json())
      .then(data=>{
        if(data.error)
        {
            notifyError(data.error)
        }
        else
        {
            notifySuccess(data.message)
            navigate('/')
        }
        
        console.log(data)
    })

  
}
const google = () => {
    window.open("http://localhost:8080/auth/google", "_self");
    
  };

  return (
    <div className="login">
      <div className="wrapper">
      
        <div className="FormContent">
<h3 className="HR">HR MANAGEMENT PORTAL </h3>
{/* <h2 className='Regg'>Registration</h2> */}
        <input type='text' value={userName} name='userName' placeholder='User Name' onChange={(e)=>{setUserName(e.target.value)}}/>
        <br/>
        <input type='email' value={email} name='email' placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/>
        <br/>
        <input type='password' value={password} name='password' placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
        <br/>
        <button className="submit" onClick={postData}> Register User</button>
        <br/>
        <p>Already have an account? <Link to="/"><strong>Sign In</strong></Link></p>
        </div>
      </div>
    </div>
  )
}
