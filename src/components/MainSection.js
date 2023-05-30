import React, {useState} from 'react'
import {Link,  useParams} from 'react-router-dom'
import './MainSection.scss'
import CategoriesHeader from './CategoriesHeader'
function MainPage(btnName, setBtnName){
 

    return (
    <div className="wrapper">
      <section className="main-section container">
        <Link  to="/Categories/Furniture " className="main-section-left" ><h2>Live comfortably</h2></Link>
        <Link to="/Categories/SkinCare" className="main-section-center" ><h2>Skincare</h2></Link>
        <div >
          <Link  to="/Categories/Kitchen" className="main-section-right-top"><h2>Kitchen</h2></Link >
          <Link  to="/Categories/Electronics" className="main-section-right-bot" ><h2>Electronics</h2></Link >

        </div>

      </section>
      <section className="proud-of">
        
      </section>
    </div>
    )
   
  
  }
  export default MainPage