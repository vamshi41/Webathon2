import React from 'react'
import {Outlet} from 'react-router-dom'
import Footer from './Footer'
import Navigationbar from './Navigationbar'
function Rootlayout() {
  return (
    <div>
      <Navigationbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Rootlayout