import logo from './logo.svg';
import './App.css';
import Navbar from './component/header';
import Footer from './component/footer';
import Welcome from './component/welcome';
import Contact from './component/contactus';
import Aboutus from './component/aboutus';
import Footer2 from './component/footer2';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Welcome/>
      <Footer2/>
      <Aboutus/>
      <Contact/>
      
      <Footer/>
    </div>
  );
}

export default App;
