import './App.css';
import {Router, Redirect} from "@reach/router";
import AdminPage from './views/AdminPage';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        El Perfume Parfait
      </header>
      <Router>
        <AdminPage path="/"/>
        <AboutUs path='/about'/>
      </Router>
    </div>
  );
}

export default App;
