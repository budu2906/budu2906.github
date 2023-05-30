import './Cart.scss'
import CartItem from './CartItem';
function Cart(){
   

    return (
        <>
    <div className="shopping-cart">
      <div className="cart-header">
       <h2>Your shopping cart</h2>
       <span>close</span>
      </div>
      <CartItem/>
    </div>
    </>
    )
}

export default Cart