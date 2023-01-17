import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "./screens/about";
import Events from "./screens/events";
import Home from "./screens/home";
import Itenary from './../components/Itenary';
export default function Root() {
  return (
    <div className = "bg-background font-poppins">
      <Navbar />
    <Home/>
    <About/>
     <Itenary/>
      <Events />


    <Footer/>
    

    </div>
  )
}
