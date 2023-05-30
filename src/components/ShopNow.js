import './ShopNow.scss'
import shopnow from '../img/section1/shopnow.jpg'
import {Link} from 'react-router-dom'
function ShopNow(){
    return <section className="shop-now container">
        <div className="shop-now-left">
            <div>
            <h3>Creative harmonious living</h3>
            <p>RAOUF Products are all made to standard sizes so that you can mix and match them freely.</p>
            <Link onClick={()=>{window.scrollTo(0,0)}} to="/Categories/All" id="a" href="#"><p>SHOP NOW</p></Link>
            </div>
        </div>
        <div className="shop-now-right">
            <img src={shopnow} />
        </div>
    </section>
}

export default ShopNow;