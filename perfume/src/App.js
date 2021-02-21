import './App.css';
import {Router, Redirect} from "@reach/router";
import AdminPage from './views/AdminPage';
import LandingPage from './views/LandingPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        El Perfume Parfait
      </header>
      <Router>
        <LandingPage path="/home" />
        <AdminPage path="/"/>
      </Router>
    </div>
  );
}

export default App;
