import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "./screens/about";
import Events from "./screens/events";
import Home from "./screens/home";
import Itenaryscreen from "./screens/itenaryscreen";

export default function Root() {

  return (
    <div>
      <Navbar  />
      <Home />
      <About />
      <Itenaryscreen />
      <Events />

      <Footer />
    </div>
  );
}

