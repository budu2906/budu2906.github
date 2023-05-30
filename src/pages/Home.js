import NavBar from '../components/NavBar'
import MainSection from '../components/MainSection'

import ProudSection from '../components/proudSection';
import ShopNow from '../components/ShopNow'
import Trending from '../components/Trending'
import ShopNowReverse from '../components/ShopNowReverse'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
    <MainSection/>
    <ProudSection/>
    <ShopNow/>
    <Trending/>
    <ShopNowReverse/>
    </>
  )
}
