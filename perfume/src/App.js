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
import TestAdminPage from './views/Test/TestAdminPage';
// import Profile from './components/Profile';
import Search from './components/Search';
import { Main } from './views/Main';
import ScrollToTop from './components/ScrollToTop';

//Testing
import TestLogin from './components/TestLogin';
import ProductTest from '../src/views/Test/ProductTest';
import AllProductsTest from '../src/views/Test/AllProductsTest';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Router>
        <Hero path="/" />
        <Product path="/products" />
        <AboutUs path='/about'/> 
        <Search path='/search'/>
        <AboutPage path="/aboutus"/>
        <UpdatePage path="/update/:id"/> 
        <SingleProduct path="/products/:id" />
        <Main path="/register" />
        <AdminPage path="/admin"/>

        {/* Testing Components */}
        <TestAdminPage path="/test" />
        <TestLogin path="/loginTest" />
        <AllProductsTest path="/testAll" />
        <ProductTest path="/testest/:id"/>
      </Router>
      <ScrollToTop />
      <Footer/>
    </div>
  );
}

export default App;
