import React from 'react'
import {Items} from '../AllData'
import {Link, useParams} from 'react-router-dom'

export default function CategoriesAll() {
    const filteredItems = Items.filter((item)=>item.id<=20)
    
  return (
    <>
    <div className="categories-products container">
        {filteredItems.map((item)=>(
            <Link   to={`/Categories/product/${item.id}`}   onClick={()=>{window.scrollTo(0,0)}} key={item.id} className="categories-container">
                <img  src={item.img} />
                <p>{item.description}</p>
                <h3>{`${item.price}$`}</h3>
               
            </Link>
        ))}
    </div>
    </>
    
  )
}
