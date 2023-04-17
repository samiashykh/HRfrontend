import React from 'react';
import { useEffect, useState } from "react";
import Employees from "./Employess.png";
import Departments from "./Departments.png";
import Revenue from "./Revenue.png";
import {  dashboardmaindivPSItemButtonICON, dashbaordicon} from "../Style/style";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import PeopleIcon from "@mui/icons-material/People";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import InventoryIcon from "@mui/icons-material/Inventory";
import SecurityIcon from "@mui/icons-material/Security";
import { Outlet } from 'react-router-dom'
import HR from "./Humans.png"
import { Link, useNavigate } from 'react-router-dom';


export default function Profile() {


  const [user, setUser] = useState(null);
  

  const getUser = () => {
    fetch("http://localhost:8080/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    })
      .then((response) => {
        if (response.status === 200) return response.json();
        throw new Error("authentication has been failed!");
      })
      .then((resObject) => {
        console.log(resObject)
        setUser(resObject.user);
        
        
      })
      
      .catch((err) => {
        console.log(err);
      });
  };
  
  useEffect(() => {
    getUser();
  }, []);

  const LocalUser = localStorage.getItem("user");
  console.log(LocalUser);
  console.log(user)

  const naviagte = useNavigate();
  const SignOut = () =>{
    if(user)
    {
      window.open("http://localhost:8080/auth/logout", "_self");
    }
    else if(LocalUser)
    {
      localStorage.clear();
      naviagte("/");
    }
    
  }



return (
  
  
    <div>
       {user ? (<>
        <div>
    <header class="header">
      <div class="head">
      <img className="Logo" src={HR} ></img> 
      {/* <img className="HRIS" src={HRIS}/> */}
           
               <h1 className="HRIS">HR MANAGEMENT SYSTEM</h1>
            <div className='GitHubNavBarS'>
               
                <div className='flexy'>
                <h4 className='nm'>{user.userName}</h4>
                <h4 className='em'>{user.email}</h4> </div>
                <button onClick={SignOut} className="SearchBtn"> Signout </button>
            </div>
        
      </div>
    </header>

    <div className="main">

      <div className="SideBar">

        <div className="nav">
    
        
          <div className="nav-link">
         <PeopleIcon style={dashbaordicon} />
            <span>Employee Records</span>
          </div>
          <div className="nav-link">
            <PersonAddAltIcon style={dashbaordicon} />
            <span>Add Employee</span>
            </div>
          <div className="nav-link">
            <AccountBalanceIcon style={dashbaordicon} />
            <span>Payroll System</span>
          </div>
          <div className="nav-link">
            <LocalAtmIcon style={dashbaordicon} />
            <span>Financial Records</span>
          </div>
          <div className="nav-link">
            <InventoryIcon style={dashbaordicon} />
            <span>Inventory</span>
          </div>
          <div className="nav-link">
            <SecurityIcon style={dashbaordicon} />
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>

      <div className="Content">

        <div className="up">

          <div className="card">
            <EmployeesBox />
          </div>
          <div className="card">
            <ProjectBox  />
          </div>
          <div className="card">
            <RevenueBox  />
          </div>
         
        </div>

        <div className="down">

      
          <h1 className="record"> Employee Record </h1>
        <div>
                <table id="tableBody">
                <tr>
    <th>FullName</th>
    <th>Email</th>
    <th>Mobile no</th>
    <th>Role</th>
  </tr>
  <tr>
    <td>{user.record1Names} </td>
    <td>{user.record1Email}</td>
    <td>{user.record1Mobile}</td>
    <td>{user.record1Role}</td>
    <td>{user.record1Date}</td>
  </tr>
  <tr>
    <td>{user.record2Names} </td>
    <td>{user.record2Email}</td>
    <td>{user.record2Mobile}</td>
    <td>{user.record2Role}</td>
    <td>{user.record2Date}</td>
  </tr>
  <tr>
    <td>{user.record3Names} </td>
    <td>{user.record3Email}</td>
    <td>{user.record3Mobile}</td>
    <td>{user.record3Role}</td>
    <td>{user.record3Date}</td>
  </tr>
                
            </table>
        </div>
    </div>
                 </div>
      </div>

     
    </div>
       </> ): LocalUser ? (<> <div>
    <header class="header">
      <div class="head">
      <img className="Logo" src={HR} ></img> 
      {/* <img className="HRIS" src={HRIS}/> */}
           
               <h1 className="HRIS">HR MANAGEMENT SYSTEM</h1>
            <div className='GitHubNavBarS'>
               
                <div className='flexy'>
                <h4 className='nm'>{JSON.parse(localStorage.getItem("user")).userName}</h4>
                <h4 className='em'>{JSON.parse(localStorage.getItem("user")).email}</h4> </div>
                <button onClick={SignOut} className="SearchBtn"> Signout </button>
                
     
            </div>
        
      </div>
    </header>

    <div className="main">

      <div className="SideBar">

        <div className="nav">
    
        
          <div className="nav-link">
         <PeopleIcon style={dashbaordicon} />
            <span>Employee Records</span>
          </div>
          <div className="nav-link">
            <PersonAddAltIcon style={dashbaordicon} />
            <span>Add Employee</span>
            </div>
          <div className="nav-link">
            <AccountBalanceIcon style={dashbaordicon} />
            <span>Payroll System</span>
          </div>
          <div className="nav-link">
            <LocalAtmIcon style={dashbaordicon} />
            <span>Financial Records</span>
          </div>
          <div className="nav-link">
            <InventoryIcon style={dashbaordicon} />
            <span>Inventory</span>
          </div>
          <div className="nav-link">
            <SecurityIcon style={dashbaordicon} />
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>

      <div className="Content">

        <div className="up">

          <div className="card">
            <EmployeesBox />
          </div>
          <div className="card">
            <ProjectBox  />
          </div>
          <div className="card">
            <RevenueBox  />
          </div>
         
        </div>



        <div className="down">

              
          <h1 className="record"> Employee Record </h1>
        <div>
                <table id="tableBody">
                <tr>
    <th>FullName</th>
    <th>Email</th>
    <th>Mobile no</th>
    <th>Role</th>
    <th>Hiring Date</th>
  </tr>
  <tr>
    <td>{JSON.parse(localStorage.getItem("user")).record1Names} </td>
    <td>{JSON.parse(localStorage.getItem("user")).record1Email}</td>
    <td>{JSON.parse(localStorage.getItem("user")).record1Mobile}</td>
    <td>{JSON.parse(localStorage.getItem("user")).record1Role}</td>
    <td>{JSON.parse(localStorage.getItem("user")).record1Date}</td>
    
  </tr>
  <tr>
    <td>{JSON.parse(localStorage.getItem("user")).record2Names} </td>
    <td>{JSON.parse(localStorage.getItem("user")).record2Email}</td>
    <td>{JSON.parse(localStorage.getItem("user")).record2Mobile}</td>
    <td>{JSON.parse(localStorage.getItem("user")).record2Role}</td>
    <td>{JSON.parse(localStorage.getItem("user")).record2Date}</td>
   
  </tr>
  <tr>
    <td>{JSON.parse(localStorage.getItem("user")).record3Names} </td>
    <td>{JSON.parse(localStorage.getItem("user")).record3Email}</td>
    <td>{JSON.parse(localStorage.getItem("user")).record3Mobile}</td>
    <td>{JSON.parse(localStorage.getItem("user")).record3Role}</td>
    <td>{JSON.parse(localStorage.getItem("user")).record3Date}</td>
    
  </tr>
            
                
            </table>
        </div>
    </div>
                 </div>
      </div>

      <EmailDisplay />
    </div></>):(<><h5>Loading....</h5></>)}
   
    </div>



    )

}


function EmailDisplay() {
  return <h4 className="displayEmail">{sessionStorage.getItem("email")}</h4>;
}


function EmployeesBox(props) {
  return (
    <div class="box">
      <div className="BoxFlex">
        <p>1000+
          <br />
          <span>Employees</span>
        </p>
        
      </div>
      <div>
        <img className="BoxImgE" src={Employees} />
      </div>
    </div>
  );
}


function ProjectBox(props) {
  return (
    <div class="box">
      <div className="BoxFlex">
        <p>
       50+
          <br />
          <span> Projects</span>
        </p>
        
      </div>
      <div>
        <img className="BoxImgD" src={Departments} />
      </div>
    </div>
  );
}

function RevenueBox(props) {
  return (
    <div class="box">
      <div className="BoxFlex">
        <p>
        $$$ <br />
          <span> Budget </span>
        </p>
       
      </div>
      <div>
        <img className="BoxImgR" src={Revenue} />
      </div>
    </div>
  );

  }