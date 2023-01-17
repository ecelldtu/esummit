import Navbar from "../components/Navbar";
import Events from "./screens/events";
import Home from "./screens/home";
export default function Root() {
  return (
    <div className="bg-background font-poppins w-[100%] m-0 ">
      <Navbar />
      <Home />

      <Events />
    </div>
  );
}
