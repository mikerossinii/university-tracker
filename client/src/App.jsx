import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import UniversityDetail from './pages/UniversityDetail';
import Login from './pages/Login';
import Admin from './pages/Admin';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Controlla se c'è un utente salvato in localStorage
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const ProtectedRoute = ({ children, requireAuth = true }) => {
    if (requireAuth && !user) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login setUser={setUser} />} />
          
          <Route path="/admin" element={
            <ProtectedRoute>
              <Admin user={user} setUser={setUser} />
            </ProtectedRoute>
          } />
          
          <Route path="/" element={
            <ProtectedRoute>
              <>
                <header className="header">
                  <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <h1>🎓 University Tracker</h1>
                        <p className="tagline">Trova l'università perfetta per te</p>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <span style={{ color: 'white', opacity: 0.9 }}>
                          👤 {user?.username}
                        </span>
                        <button 
                          onClick={() => {
                            setUser(null);
                            localStorage.removeItem('user');
                            window.location.href = '/login';
                          }}
                          style={{
                            background: 'rgba(255, 255, 255, 0.2)',
                            color: 'white',
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                            padding: '0.5rem 1rem',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontWeight: '600'
                          }}
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  </div>
                </header>
                <Home />
              </>
            </ProtectedRoute>
          } />
          
          <Route path="/university/:id" element={
            <ProtectedRoute>
              <UniversityDetail />
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
