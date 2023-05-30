import {Items} from './AllData'
import './Trending.scss'
import {Link} from 'react-router-dom'

function TrendingItem(){
const filteredTrending = Items.filter((item)=>item.id>=8);
return <>
            
             <div onClick={()=>{window.scrollTo(0,0)}} id="slider"  className="trending-products container">
        {filteredTrending.map((item)=>(
                <Link  to={`/Categories/product/${item.id}`} className="trending-grid" key={item.id} >
                <img src={item.img}/>  
                <div className="trending-details">
                    <p>{`${item.description}`}</p>
                    <p> {`${item.price}$`}</p>
                </div>
                </Link>
            
            ))}
        </div>
        </>
}

export default TrendingItem