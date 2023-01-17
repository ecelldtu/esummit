import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "./screens/about";
import Events from "./screens/events";
import Home from "./screens/home";
export default function Root() {
  return (
    <div className = "bg-background font-poppins">
      <Navbar />
    <Home/>
    <About/>

      <Events />


    <Footer/>
    

    </div>
  )
}
