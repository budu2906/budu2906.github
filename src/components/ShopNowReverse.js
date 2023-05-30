import './ShopNowReverse.scss'
import shopnowreverse from '../img/section1/shopnowreverse.jpg'
import {Link} from 'react-router-dom'

function ShopNowReverse(){
    return <section className="shop-now-reverse container">
    <div className="shop-reverse-left">
        <div>
        <h3>Comfortable & Elegante Living</h3>
        <p>RAOUF Products are all made to standard sizes so that you can mix and match them freely.</p>
        <Link onClick={()=>{window.scrollTo(0,0)}} to="/Categories/All" id="a" href="#"><p>SHOP NOW</p></Link>
        </div>
    </div>
    <div className="shop-reverse-right">
        <img src={shopnowreverse} />
    </div>
</section>
}

export default ShopNowReverse