
import Footer from '../components/Footer'
import About from './screens/about'
import Home from './screens/home'
import Events from './../components/Events';
import Maps from './../components/Maps';
import Itenary from './../components/Itenary';


export default function Root() {
  return (
    <>
    <Home/>
    <About/>
    
    <Itenary/>
    {/* <Maps/> */}
    <Footer/>
    {/* <Home/> */}
   
    </>
  )
}
