import React, {useState} from 'react'
import './NavBar.scss'
import logoImage from '../img/logo.png'
import Cart from './Cart'
import NavbarResponsive from './NavbarResponsive'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

function NavBar(){
const [show, setShow] = useState(false);



return <header className="header">
{show ?<NavbarResponsive show={show} setShow={setShow}/> : null}
  <nav className="nav container">
    <Link to="/">    
   <img onClick={()=>{window.scrollTo(0,0)}} src={logoImage}/>
    </Link>
   <ul type="none">
    <li>
      <Link onClick={()=>{window.scrollTo(0,0)}} to="/Categories/All">
        CATEGORIES
      </Link>
    </li>
    <li>
      <Link onClick={()=>{window.scrollTo(0,0)}} to="/Categories/product/1">
        PRODUCT PAGE
      </Link>
    </li>
    <button>
    <FontAwesomeIcon className="nav-icon" icon={faShoppingCart} />
    
    </button>
    <div onClick={()=>{setShow(!show)}} className="burger"><span></span><span></span><span></span></div>
   </ul>
  </nav>
 

</header>

}
    

export default NavBar;