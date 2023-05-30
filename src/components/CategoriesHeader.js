import {React, useState} from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import MainPage from './MainSection'

 function CategoriesHeader() {

    const [btnName, setBtnName] = useState("All");
    <MainPage btnName={btnName} setBtnName={setBtnName}/>
    const handleBtnName = (name) => {
        setBtnName(name)
      };

 
  return (
  
    <>
    <section className="categories-section container">
        <div className="categories-title">
        <Link className="categories-home" to="/"><FontAwesomeIcon icon={faArrowLeft} /><p>home</p></Link>
    <h3 id="categories-name">{btnName}</h3>
      
        </div> 
        <div className="categories">
    <Link onClick={() => handleBtnName("all")}  to="All" ><p>All</p></Link>
    <Link to="/Categories/Furniture"  onClick={() => handleBtnName("Furnitures")}><p>Furnitures</p></Link>
    <Link to="Electronics"  onClick={() => handleBtnName("Electronics")}><p>Electronics</p></Link>
    <Link to="Lamps"  onClick={() => handleBtnName("Lamps")}><p>Lamps</p></Link>
    <Link to="Kitchen"  onClick={() => handleBtnName("Kitchen")}><p>Kitchen</p></Link>
    <Link  onClick={() => handleBtnName("Chairs")} to="Chairs"><p>Chairs</p></Link>
    <Link to="SkinCare"  onClick={() => handleBtnName("Skin Care")}><p>Skin Care</p></Link>
        </div>
    </section>
    
    </>
    

  )
}


export default CategoriesHeader;