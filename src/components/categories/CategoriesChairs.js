import React from 'react'
import {Items} from '../AllData'
import Categories from '../../pages/Categories'
import {Link} from 'react-router-dom'
import Footer from '../Footer'

export default function CategoriesChairs() {
  const filteredItems = Items.filter((item)=>item.category==="Chairs")
  return (
    <>
    <div className="categories-products container">
        {filteredItems.map((item)=>(
            <Link onClick={()=>{window.scrollTo(0,0)}} to={`/Categories/product/${item.id}`} key={item.id} className="categories-container">
                <img  src={item.img} />
                <p>{item.description}</p>
                <h3>{`${item.price}$`}</h3>
               
            </Link>
        ))}
    </div>
    
    </>
  )
}
