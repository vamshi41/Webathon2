import React from 'react'
import './Navigationbar.css'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect,useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsPersonFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaUser } from "react-icons/fa";
import {loginContext} from './contexts/loginContext'
function Navigationbar() {
  const contextValues = useContext(loginContext);
  const currentUser = contextValues.currentUser;
  let navigate = useNavigate()
  let info=()=>{
    navigate('/Userinfo')
  }
  


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>





      <div className="navbar navbar-expand-sm bg-dark  navbar-dark ">
        <div>
        </div>
        <div className="container-fluid">
          <div className='flex-column'>
            <a href="" className="navbar-brand">
              <img src="data:image/png;base64,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" className="rounded-circle" alt="" width="50px" heigthht="40px" />
            </a>

          </div>
          <button data-bs-target="#w" data-bs-toggle="collapse" className="navbar-toggler"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="w">
            <ul className="navbar-nav ">
              <li className="nav-item" ><a href="/Home" className="nav-link text-white">home</a></li>

              <li className="nav-item" ><a href="#" className="nav-link text-white" >AboutUs</a></li>
            </ul>
            if({currentUser.username!==undefined}){
       <h3            className='pl-3 text-white'>{currentUser.username} 
</h3>
}   
            <form className="d-flex m-2 ms-auto" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

            </form>
            {/* <a  className='text-white ' ><img src="https://i.pinimg.com/736x/40/85/e4/4085e4f82da47678a6c140d356463b30.jpg" className='rounded-circle telme' alt="" width="50px" /></a> */}
<a href="/Userinfo" className='m-1'><BsPersonFill size="35px" color="white" /></a>






          </div>


        </div>
      </div>
      <>
      
      </>

    </div>
  )
}

export default Navigationbar