import React from 'react'
import './Landing.css'
import { useNavigate } from 'react-router-dom'
function Landing() {
 let navigate=useNavigate()
 let student=()=>{
  navigate('/Login')
 }
let admin=()=>{
  navigate('/Login1')
}

  return (
    <div className='delim'>
 <div className='protest-revolution-regular'>
<p>welcome to our app</p>
</div>
    <div className='d-flex justify-content-evenly landing'>
        

  <button onClick={admin}>
    <div class="card text-left">
      <div class="card-body">
        <h4 class="card-title">ORGANISATION</h4>
        <p class="card-text"></p>
      </div>
    </div>
  </button>
  <button onClick={student}>
    <div class="card text-left">
      <div class="card-body">
        <h4 class="card-title">STUDENT</h4>
        <p class="card-text"></p>
      </div>
    </div>
  </button>




    </div></div>
  )
}

export default Landing