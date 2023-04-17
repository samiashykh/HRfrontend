import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import HR from "../images/HR.gif"
export default function SignIn() {


  const navigate = useNavigate();

  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Toast Functions
    const notifyError=(msg)=> toast.error(msg);
    const notifySuccess=(msg)=> toast.success(msg);

    //Email Regex
    const emailRegex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    const postData=(e)=>{
        e.preventDefault();
      //Checking email and password
      if(!emailRegex.test(email))
      {
          notifyError("Invalid Email");
          return
      }
      

      //Sending Data To Server
      fetch("http://localhost:8080/auth/signin",{
          method:"POST",
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify({
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
              //notifySuccess(data.message)
              notifySuccess("Signed In Successfully")
               console.log(data)
               localStorage.setItem("jwt", data.token)
               localStorage.setItem("user", JSON.stringify(data.user))
               //setUserLogin(true)
                navigate('/profile')
          }
          
          console.log(data)
      })
  }

  const google = () => {
    window.open("http://localhost:8080/auth/google", "_self");
    
  };

  return (
    <div className="login">
    <div className="wrapper2">
    <div>

      <img/>
    </div>
      <div className="FormContent">
      <h3 className="HR">HR MANAGEMENT PORTAL </h3>

      <input   className="SignInp" type='email' value={email} name='email' placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/>
      <br/>
      <input  className="SignInp"  type='password' value={password} name='password' placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
      <br/>
      <button  className="SubmitInp lgbtn" onClick={postData}>Sign In</button>
      <br/>
      <p ckass>Don't have an account? <Link to="/signup"><strong>Sign Up</strong></Link></p>
      <br/>
      <button   className="icon SubmitInp" onClick={google}>Sign In By Google</button>
      </div>
    </div>
  </div>
  )
}
