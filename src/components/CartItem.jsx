import React, {useState} from 'react'
import {Items} from './AllData'
export default function CartItem() {
  const [cart, setCart] = useState([]);
  const item = Items.map((item)=>Items==item)
  const {id, img, description} = item
  console.log(item.id)
  return (
    <div  className="cart-items">
        
    </div>
  )
}
