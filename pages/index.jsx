import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "./screens/about";
import Events from "./screens/events";
import Home from "./screens/home";
import Itenaryscreen from "./screens/itenaryscreen";
import Sponsors from './../components/Sponsors';
import Motivation from './../components/Motivation';

export default function Root() {

  return (
    <div>
      <Navbar  />
      <Home />
      <Motivation/>
      <About />
      <Itenaryscreen />
      <Events />
      <Sponsors/>
      <Footer />
    </div>
  );
}

