import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "./screens/about";
import Events from "./screens/events";
import Home from "./screens/home";
import Itenary from './../components/Itenary';
import Itenaryscreen from './screens/itenaryscreen';
export default function Root() {
  return (
    <div className = "bg-background font-poppins">
      <Navbar />
    <Home/>
    <About/>
     {/* <Itenary/> */}
     <Itenaryscreen/>
      <Events />


    <Footer/>
    

    </div>
  )
}
