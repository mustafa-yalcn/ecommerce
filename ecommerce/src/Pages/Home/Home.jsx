import Sliders from "../../Components/Slider/Sliders"
import BannerGrids from "../../Components/BannerGrids/BannerGrids"
import Info from "../../Components/Info/Info"
import Showcase from "../../Components/Showcase/Showcase"


const Home = () => {
  return (
    <div>
<div className="w-full">
<Sliders />
<Info />
<BannerGrids/>
<Showcase />
</div>
    </div>
  )
}

export default Home