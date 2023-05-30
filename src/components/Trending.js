import './Trending.scss'
import TrendingItem from './TrendingItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong, faLeftLong} from '@fortawesome/free-solid-svg-icons'


function Trending(){

    
    const slideLeft =()=>{
        let slider= document.getElementById("slider");
        slider.scrollLeft=slider.scrollLeft -235;
      }
      const slideRight = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 235;
      };
      
    return (
        <div className="trending-slider container">
            <div className=" trending-h2">
            <h2 >Trending now</h2>
            <div className="trending-sliders">
                <button  id="slider-left"
                onClick={slideLeft}>
                    <FontAwesomeIcon icon={faLeftLong} />
                </button>
                <button  id="slider-right"
                onClick={slideRight}>
                    <FontAwesomeIcon icon={faRightLong}/>
                </button>
                
            </div>
            </div>
            
            {<TrendingItem />}
        
        </div>

        )
}

export default Trending