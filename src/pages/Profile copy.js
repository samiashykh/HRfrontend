import React from 'react';
import { useEffect, useState } from "react";
import Header3 from '../components/Header3';
import Employees from "./Employess.png";
import Departments from "./Departments.png";
import Revenue from "./Revenue.png";
import HRMS from "./HRMS.png";
import HRIS from "./HRIS.png";

import {  dashboardmaindivPSItemButtonICON, dashbaordicon} from "../Style/style";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import PeopleIcon from "@mui/icons-material/People";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import InventoryIcon from "@mui/icons-material/Inventory";
import SecurityIcon from "@mui/icons-material/Security";
import { Outlet } from 'react-router-dom'
import CircleNotificationsOutlinedIcon from '@mui/icons-material/CircleNotificationsOutlined';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpIcon from '@mui/icons-material/Help';
import HR from "./Humans.png"
import { Link, useNavigate } from 'react-router-dom';


const LocalUser = localStorage.getItem("user");
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
      // .then(data=>{
      //   this.setState ({
      //     data:data
      //   })
      // })
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

  


//     //   {user ? (
//     //     <>
//     //       <h1>{user.userName}</h1>
//     //       <h1>{user.email}</h1>
//     //       <h1>{user.totalProjects}</h1>
//     //       <h1>{user.totalEmployees}</h1>
//     //       <h1>{user.budgets}</h1>
//     //       <h1>{user.totalProjects}</h1>
//     //       <h1>{user.totalOrders}</h1>
//     //     </>
//     //   ): LocalUser ? (
//     //     <>
//     //       <h1>{JSON.parse(LocalUser).userName}</h1>
//     //       <h1>{JSON.parse(LocalUser).email}</h1>
//     //       <h>{JSON.parse(LocalUser).totalProjects}</h>
//     //       <h1>{JSON.parse(LocalUser).totalEmployees}</h1>
//     //       <h>{JSON.parse(LocalUser).budgets}</h>
//     //       <h>{JSON.parse(LocalUser).totalOrders}</h>
//     //     </>
//     //   ): (
//     //     <>
//     //       <h1>Loading User...</h1>
//     //     </>
//     //   )
  return (
    // <>
    //   <Header2/>
    //   <h1>{JSON.parse(localStorage.getItem("user")).userName}</h1>
    // </>
    <div>
    <header class="header">
      <div class="head">
      <img className="Logo" src={HR} ></img> 
      {/* <img className="HRIS" src={HRIS}/> */}
           
               <h1 className="HRIS">HR MANAGEMENT SYSTEM</h1>
            <div className='GitHubNavBarS'>
               
                <CircleNotificationsOutlinedIcon />
                <HelpIcon />
                <SettingsOutlinedIcon />
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
                    <th> FullName </th>
                    <th> Email </th>
                    <th> Mobile </th>
                    <th> Monthly Salary </th>
                    <th> Role </th>
                </tr>
                <tr>
                    <td> {JSON.parse(localStorage.getItem("user")).record1Name} </td>
                    <td> {JSON.parse(localStorage.getItem("user")).recorrd1Email} </td>
                    <td> {JSON.parse(localStorage.getItem("user")).record1Mobile}</td>
                    <td>{JSON.parse(localStorage.getItem("user")).record1Salary} </td>
                    <td>{JSON.parse(localStorage.getItem("user")).record1Role} </td>
                </tr>
                <tr>
                    <td> {JSON.parse(localStorage.getItem("user")).record2Name} </td>
                    <td> {JSON.parse(localStorage.getItem("user")).record2Email} </td>
                    <td> {JSON.parse(localStorage.getItem("user")).record2Mobile}</td>
                    <td>{JSON.parse(localStorage.getItem("user")).record2Salary} </td>
                    <td>{JSON.parse(localStorage.getItem("user")).record2Role} </td>
                </tr>
                <tr>
                    <td> {JSON.parse(localStorage.getItem("user")).record3Name} </td>
                    <td> {JSON.parse(localStorage.getItem("user")).record3Email} </td>
                    <td> {JSON.parse(localStorage.getItem("user")).record1Name}</td>
                    <td>{JSON.parse(localStorage.getItem("user")).record3Salary} </td>
                    <td>{JSON.parse(localStorage.getItem("user")).record3Role} </td>
                </tr>
            
                
            </table>
        </div>
    </div>
                 </div>
      </div>

      <EmailDisplay />
    </div>
    
  );}

  function EmailDisplay() {
    return <h4 className="displayEmail">{sessionStorage.getItem("email")}</h4>;
  }


  function EmployeesBox(props) {
    return (
      <div class="box">
        <div className="BoxFlex">
          <p>{JSON.parse(LocalUser).totalEmployees}
            <br />
            <span>Employees</span>
          </p>
          <i class="fa fa-list box-icon"></i>
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
         { JSON.parse(LocalUser).totalProjects}
            <br />
            <span> Projects</span>
          </p>
          <i class="fa fa-list box-icon"></i>
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
          {JSON.parse(LocalUser).budgets} <br />
            <span> Budget </span>
          </p>
          <i class="fa fa-list box-icon"></i>
        </div>
        <div>
          <img className="BoxImgR" src={Revenue} />
        </div>
      </div>
    );
  
    } 