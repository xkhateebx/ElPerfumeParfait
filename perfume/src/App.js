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
import SingleProduct from './views/SingleProduct';
import TestAdminPage from './views/TestAdminPage';
// import Profile from './components/Profile';
import Search from './components/Search';
import { Main } from './views/Main';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Router>
        {/* <Profile path='/prof'/> */}
        <Search path='/search'/>
        <Hero path="/" />
        <AdminPage path="/admin"/>
        <Product path="/products" />
        <AboutUs path='/about'/> 
        <Main path="/register" />
        <AboutPage path="/aboutus"/>
        <UpdatePage path="/update/:id"/> 
        <SingleProduct path="/products/:id" />
        <TestAdminPage path="/test" />
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
