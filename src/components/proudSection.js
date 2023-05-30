import './proudSection.scss'
import {Link} from 'react-router-dom'
import {Items} from './AllData'


function ProudSection(){
    const filteredItems = Items.filter((item)=>item.id<=8);
    return <>
             <h2 id="proud-container" className="container">Products we are proud</h2>
             <div  className="proud-section container">
        {filteredItems.map((item)=>(
                <Link to={`/Categories/product/${item.id}`} className="proud-grid" key={item.id} onClick={()=>{window.scrollTo(0,0)}}  >
                <img src={item.img}/>  
                <div className="proud-details">
                    <p>{`${item.description}`}</p>
                    <p> {`${item.price}$`}</p>
                </div>
                </Link>
            
            ))}
        </div>
    </>
}
export default ProudSection