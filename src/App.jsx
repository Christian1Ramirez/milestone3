import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar'; 
import Home from './components/Home';
import Premiums from './components/Premiums';
import Tours from './components/Tours';
import Login from './components/Login';
import Logout from './components/Logout'
import SignUp from './components/SignUp';


function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Navbar /> 
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/premiums' element={<Premiums />} />
            <Route path='/tours' element={<Tours />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
