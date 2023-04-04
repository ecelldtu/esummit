import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "./screens/about";
import Events from "./screens/events";
import Home from "./screens/home";
import Itenaryscreen from "./screens/itenaryscreen";
import Sponsors from './../components/Sponsors';
import Motivation from './../components/Motivation';
import PastSpeakers from "../components/PastSpeakers"
import Head from "next/head";

export default function Root() {

  return (
    <div>
    <Head>
    <title>EsummitDTU</title>
    <meta property="og:image" href="/ecelltext.png" />
    <link rel="shortcut icon" href="/ecelltext.png" />

  </Head>
      <Navbar  />
      <Home />
    
      <About />
      <Itenaryscreen />
      <Events />
      <Sponsors/>
      <PastSpeakers/>
      <Footer />
    </div>
  );
}

