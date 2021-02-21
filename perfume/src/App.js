import './App.css';
import {Router} from "@reach/router";
import AdminPage from './views/AdminPage';
import AboutUs from './views/AboutUs';
import Product from './views/Product';
import Hero from './views/Hero';
import AboutPage from './views/AboutPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        El Perfume Parfait
      </header>
      <Navbar/>
      <Router>
        <Hero path="/" />
        <AdminPage path="/admin"/>
        <Product path="/products" />
        <AboutUs path='/about'/> 
        <AboutPage path="/aboutus"/> 
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
