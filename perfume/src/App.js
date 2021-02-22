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
import Login from './components/Login/login';
import SingleProduct from './components/SingleProduct';

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
        <Login path="/login" />
        <SingleProduct path="/products/:id" />
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
