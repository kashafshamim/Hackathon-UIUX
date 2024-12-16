import Navbar from "./components/Navbar"
import Herosection from "./components/Herosection"
import ShopCard from "./components/ShopCard"
import ProductCard from "./components/Products"
import GreenSection from "./components/GreenSection"
import WhiteSection from "./components/WhiteSection"
import Blog from "./components/WhiteSection"

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <ShopCard/>
      <ProductCard />
      <GreenSection />
      <WhiteSection />
      <Blog />
    </div>
  )
}
