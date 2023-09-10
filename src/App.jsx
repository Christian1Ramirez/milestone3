import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Premiums from './components/Premiums';
import Tours from './components/Tours';


function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <ul>
            <li>
              <Link to = '/'>Home</Link>
            </li>
            <li>
              <Link to = '/premiums'>Premiums</Link>
            </li>
            <li>
              <Link to = '/tours'>Tours</Link>
            </li>
          </ul>
        </header>
        <main>
          <Routes>
            {/* add a home component to the path below when ready */}
            <Route path='/' />
            <Route path='/premiums' element={<Premiums />} />
            <Route path='/tours' element={<Tours />} />
          </Routes>
        </main>
      </Router>

    </div>
  );
}

export default App;
