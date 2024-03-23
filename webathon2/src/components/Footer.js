import React from 'react'
import './Footer.css'
function Footer() {
  return (
 
    <div>
      
      <div className='bg-dark text-white pt-5 d-flex justify-content-evenly footer w-100'>
  <div>
  <p>COMPANY</p>
  <p>Team</p>
  <p>Carriers</p>
  <p>Swimato Blog</p>
  <p>Swiggy Corporate</p>
  <p>Byg Bounty</p>
  </div>
  <div>
  <p>CONTACT</p>
  <p>Help and support</p>
  <p>Partner with us</p>
  <p>Ride with us</p>
 
  </div>
  <div>
  <p>LEGAL</p>
  <p>Privacy policy</p>
  <p>Terms and conditions</p>
  <p>Cookie policy</p>
 
  </div>
  <div className='download'>
    <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" alt="" className='' />
    <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" alt="" className='p-2' />
  </div>
</div>

    </div>
  )
}

export default Footer