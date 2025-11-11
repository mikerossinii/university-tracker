import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

function Login({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Credenziali hardcoded per semplicità
    if (username === 'admin' && password === 'admin') {
      setUser({ username: 'admin', role: 'admin' });
      localStorage.setItem('user', JSON.stringify({ username: 'admin', role: 'admin' }));
      navigate('/admin');
    } else if (username === 'user' && password === 'user') {
      setUser({ username: 'user', role: 'user' });
      localStorage.setItem('user', JSON.stringify({ username: 'user', role: 'user' }));
      navigate('/');
    } else {
      setError('Username o password non corretti');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>🎓 University Tracker</h1>
        <h2>Accedi</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Inserisci username"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Inserisci password"
              required
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="login-button">
            Accedi
          </button>
        </form>

        <div className="login-info">
          <h3>Credenziali di test:</h3>
          <p><strong>Utente:</strong> user / user</p>
          <p><strong>Admin:</strong> admin / admin</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
