import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Admin.css';

function Admin({ user, setUser }) {
  const navigate = useNavigate();
  const [universities, setUniversities] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    degree: 'magistrale',
    program: '',
    city: '',
    country: 'Italia',
    language: 'Italiano',
    tuition: '',
    rating: 4.0
  });

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/login');
      return;
    }
    fetchUniversities();
  }, [user, navigate]);

  const fetchUniversities = () => {
    fetch('/api/universities')
      .then(res => res.json())
      .then(data => setUniversities(data))
      .catch(err => console.error('Error:', err));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Crea un oggetto università completo
    const newUniversity = {
      id: formData.id || `${formData.name.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`,
      name: formData.name,
      degree: formData.degree,
      program: formData.program,
      location: {
        city: formData.city,
        country: formData.country
      },
      courses: {
        mainSubjects: [],
        specializations: []
      },
      deadlines: {
        standardRound: "2025-06-30"
      },
      requirements: {
        gpa: "Da definire",
        tests: [],
        experience: "Non richiesta"
      },
      ratings: {
        overall: parseFloat(formData.rating)
      },
      duration: {
        years: formData.degree === 'triennale' ? 3 : 2,
        structure: formData.degree === 'triennale' ? '6 semestri' : '4 semestri',
        exams: "Esami standard",
        credits: formData.degree === 'triennale' ? 180 : 120
      },
      language: formData.language,
      classSize: "Da definire",
      costs: {
        tuition: formData.tuition,
        scholarships: [],
        onCampusWork: false
      },
      career: {
        placementRate3Months: 0,
        placementRate6Months: 0,
        topSectors: [],
        topEmployers: [],
        abroadPercentage: 0,
        averageSalary: "Da definire",
        alumniNetwork: "Da definire"
      },
      international: {
        exchanges: false,
        exchangePartners: [],
        doubleDegree: [],
        internships: "Da definire"
      },
      cityLife: {
        qualityOfLife: 4.0,
        averageRent: "Da definire",
        easeOfRenting: "Medio",
        studentLife: "Da definire"
      }
    };

    console.log('Nuova università:', newUniversity);
    alert('Università aggiunta! (In produzione verrebbe salvata nel database)');
    
    // Reset form
    setFormData({
      id: '',
      name: '',
      degree: 'magistrale',
      program: '',
      city: '',
      country: 'Italia',
      language: 'Italiano',
      tuition: '',
      rating: 4.0
    });
    setShowForm(false);
  };

  const handleEdit = (university) => {
    setEditingId(university.id);
    setFormData({
      id: university.id,
      name: university.name,
      degree: university.degree,
      program: university.program,
      city: university.location.city,
      country: university.location.country,
      language: university.language,
      tuition: university.costs.tuition,
      rating: university.ratings.overall
    });
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Sei sicuro di voler eliminare questa università?')) {
      console.log('Eliminazione università:', id);
      alert('Università eliminata! (In produzione verrebbe rimossa dal database)');
    }
  };

  return (
    <div className="admin-container">
      <header className="admin-header">
        <div className="admin-header-content">
          <h1>🎓 Admin Panel - University Tracker</h1>
          <div className="admin-actions">
            <span className="admin-user">👤 {user?.username}</span>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="admin-content">
        <div className="admin-toolbar">
          <h2>Gestione Università</h2>
          <button 
            onClick={() => {
              setShowForm(!showForm);
              setEditingId(null);
              setFormData({
                id: '',
                name: '',
                degree: 'magistrale',
                program: '',
                city: '',
                country: 'Italia',
                language: 'Italiano',
                tuition: '',
                rating: 4.0
              });
            }}
            className="add-button"
          >
            {showForm ? '✕ Chiudi' : '+ Aggiungi Università'}
          </button>
        </div>

        {showForm && (
          <div className="admin-form-container">
            <h3>{editingId ? 'Modifica Università' : 'Nuova Università'}</h3>
            <form onSubmit={handleSubmit} className="admin-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Nome Università *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="es. Università Bocconi"
                  />
                </div>

                <div className="form-group">
                  <label>Tipo Laurea *</label>
                  <select
                    name="degree"
                    value={formData.degree}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="triennale">Triennale</option>
                    <option value="magistrale">Magistrale</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Nome Corso *</label>
                  <input
                    type="text"
                    name="program"
                    value={formData.program}
                    onChange={handleInputChange}
                    required
                    placeholder="es. MSc in Finance"
                  />
                </div>

                <div className="form-group">
                  <label>Lingua *</label>
                  <input
                    type="text"
                    name="language"
                    value={formData.language}
                    onChange={handleInputChange}
                    required
                    placeholder="es. Italiano, Inglese"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Città *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    placeholder="es. Milano"
                  />
                </div>

                <div className="form-group">
                  <label>Paese *</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    placeholder="es. Italia"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Tasse Universitarie *</label>
                  <input
                    type="text"
                    name="tuition"
                    value={formData.tuition}
                    onChange={handleInputChange}
                    required
                    placeholder="es. 10000-15000 EUR/anno"
                  />
                </div>

                <div className="form-group">
                  <label>Rating (1-5) *</label>
                  <input
                    type="number"
                    name="rating"
                    value={formData.rating}
                    onChange={handleInputChange}
                    min="1"
                    max="5"
                    step="0.1"
                    required
                  />
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="save-button">
                  {editingId ? '💾 Salva Modifiche' : '➕ Aggiungi'}
                </button>
                <button 
                  type="button" 
                  onClick={() => setShowForm(false)}
                  className="cancel-button"
                >
                  Annulla
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="universities-list">
          <h3>Università Esistenti ({universities.length})</h3>
          <div className="universities-table">
            {universities.map(uni => (
              <div key={uni.id} className="university-row">
                <div className="university-info">
                  <h4>{uni.name}</h4>
                  <p className="university-details">
                    {uni.program} • {uni.degree} • {uni.location.city}
                  </p>
                  <p className="university-meta">
                    ⭐ {uni.ratings.overall} • 🗣️ {uni.language} • 💰 {uni.costs.tuition}
                  </p>
                </div>
                <div className="university-actions">
                  <button 
                    onClick={() => handleEdit(uni)}
                    className="edit-button"
                  >
                    ✏️ Modifica
                  </button>
                  <button 
                    onClick={() => handleDelete(uni.id)}
                    className="delete-button"
                  >
                    🗑️ Elimina
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
