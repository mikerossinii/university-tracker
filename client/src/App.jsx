import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UniversityDetail from './pages/UniversityDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <div className="container">
            <h1>🎓 University Tracker</h1>
            <p className="tagline">Trova l'università perfetta per te</p>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/university/:id" element={<UniversityDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
