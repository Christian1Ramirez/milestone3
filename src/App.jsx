import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Premiums from './components/Premiums';
import Tours from './components/Tours';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/premiums'>Premiums</Link></li>
            <li><Link to='/tours'>Tours</Link></li>
          </ul>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Login />} /> 
            <Route path='/premiums' element={<Premiums />} />
            <Route path='/tours' element={<Tours />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;