import Navbar from "../header/header";
import Footer from "./footer";
import BodyLanding from "./body";
import ProductCard from "./productlist";

const LandingPage = () => {

  return ( 
<div id="Landing">
  <Navbar/>
  <BodyLanding/>
  <ProductCard/>
  <Footer/>
</div>
  )
};

export default LandingPage;