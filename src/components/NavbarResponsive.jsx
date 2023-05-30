import React from 'react'
import {Link} from 'react-router-dom'
export default function NavbarResponsive({show, setShow}) {
  return (
    <>
    <div className="navbar-responsive">
    <div onClick={()=>{setShow(!show)}} className="burger"><span></span><span></span><span></span></div>
        
   <ul type="none">
    <li>
      <Link onClick={()=>{setShow(!show)}} to="/Categories/All">
        CATEGORIES
      </Link>
    </li>
    <li>
      <Link onClick={()=>{setShow(!show)}} to="/Categories/product/1">
        PRODUCT PAGE
      </Link>
    </li>
   </ul>
   </div>
    </>
  )
}
