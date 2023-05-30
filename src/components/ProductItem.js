import React, {useEffect, useState} from 'react'
import {Link, useParams } from 'react-router-dom'
import CartItem from './CartItem'
import {Items} from './AllData'




export default function ProductItem() {

    const {id} = useParams()
    const item = Items.filter((item)=>item.id===parseInt(id))
    const [image, setImage] = useState(item[0].img)
    
    const [quantity, setQuantity] = useState(1);
    const calculatorPlus =()=>{
       setQuantity(quantity+1)
       
       
    }
    const calculatorMinus = () =>{
        if(quantity>1){
            setQuantity(quantity-1);
        
        }
    }
    const priceValue =(quantity)=> {
        return quantity *item[0].price
    }
  return (
    <>
    <section className="product-page-section container">
        <div className ="product-elements">
        <h2>{item[0].description}</h2>
            <div className="product-elements-left">
                <img id="product-elements-img" className="product-elements-img"  src={image} />
                <div className="change-imgs">
                    <img onClick={()=>{setImage(item[0].img)}} src={item[0].img}/>
                    <img onClick={()=>{setImage(item[0].otherImgs[0])}} src={item[0].otherImgs[0]}/>
                    <img onClick={()=>{setImage(item[0].otherImgs[1])}} src={item[0].otherImgs[1]}/>
                </div>


            </div>
            <div className="product-elements-right" >
                <p>{item[0].specs}</p>
                <div className="product-calculator">
                    <h3>Quantity</h3>
                    <div>
                        <button onClick={()=>{calculatorMinus()}} id="minus-btn">-</button>
                        <h3>{quantity}</h3>
                        <button onClick={()=>{calculatorPlus()}} id="plus-btn">+</button>
                    </div>
                    <h3>{`${priceValue(quantity)}.00$`}</h3>
                </div>
                <div className="cart-el">
                    <a href="#">ADD TO CART</a>
                    <a href="#">BUY NOW</a>
                </div>
            </div>
        </div>



        <div className="product-elements-description">
            <ul type="none">
                <li><h3>Texture:</h3></li>
                <li><p>{item[0].texture}</p></li>
            </ul>
            <ul type="none">
                <li><h3>Weight:</h3></li>
                <li><p>{item[0].weight}</p></li>
            </ul>
            <ul type="none">
                <li><h3>Size: </h3></li>
                <li><p>{item[0].size}</p></li>
            </ul>
        </div>

    </section>
    </>
  )
}
