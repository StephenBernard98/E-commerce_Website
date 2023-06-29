import './App.css';
import BannerDesign from './body/BannerDesign';
import Items from './body/Items';
import Ads from './body/ads/Ads';
import Terms from './footer/Terms';



const App = () => {
  return (
    <div>
      <BannerDesign />
      <Items />
      <Ads />
      <Terms />
    </div>
  )
}

export default App
