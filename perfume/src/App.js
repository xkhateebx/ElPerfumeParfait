import './App.css';
import {Router} from "@reach/router";
import AdminPage from './views/AdminPage';
import AboutUs from './views/AboutUs';
import Product from './views/Product';
import Hero from './views/Hero';
import AboutPage from './views/AboutPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import UpdatePage from './views/UpdatePage';

function App() {
  return (
    <div className="App">
      <Navbar/>      
      <Router>
        <Hero path="/" />
        <AdminPage path="/admin"/>
        <Product path="/products" />
        <AboutUs path='/about'/> 
        <AboutPage path="/aboutus"/>
        <UpdatePage path="/update/:id"/> 
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
