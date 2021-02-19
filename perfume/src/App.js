import './App.css';
import {Router, Redirect} from "@reach/router";
import AdminPage from './views/AdminPage';
import AddForm from './components/AddForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        El Perfume Parfait
      </header>
      <Router>
        {/* <AddForm path="/"/> */}
        <AdminPage path="/"/>
      </Router>
    </div>
  );
}

export default App;
