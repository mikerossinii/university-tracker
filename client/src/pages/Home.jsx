import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Filters from '../components/Filters';
import UniversityCard from '../components/UniversityCard';

function Home() {
  const [universities, setUniversities] = useState([]);
  const [filteredUniversities, setFilteredUniversities] = useState([]);
  const [filters, setFilters] = useState({
    degree: '',
    minRating: 0,
    maxTuition: 20000,
    language: '',
    city: ''
  });

  useEffect(() => {
    fetch('/api/universities')
      .then(res => res.json())
      .then(data => {
        setUniversities(data);
        setFilteredUniversities(data);
      })
      .catch(err => console.error('Error fetching universities:', err));
  }, []);

  useEffect(() => {
    let filtered = universities;

    if (filters.degree) {
      filtered = filtered.filter(u => u.degree === filters.degree);
    }

    if (filters.minRating > 0) {
      filtered = filtered.filter(u => u.ratings.overall >= filters.minRating);
    }

    if (filters.language) {
      filtered = filtered.filter(u => 
        u.language.toLowerCase().includes(filters.language.toLowerCase())
      );
    }

    if (filters.city) {
      filtered = filtered.filter(u => 
        u.location.city.toLowerCase().includes(filters.city.toLowerCase())
      );
    }

    setFilteredUniversities(filtered);
  }, [filters, universities]);

  return (
    <div className="container home">
      <Filters filters={filters} setFilters={setFilters} />
      
      <div className="results">
        <h2>Trovate {filteredUniversities.length} università</h2>
        <div className="university-grid">
          {filteredUniversities.map(university => (
            <Link key={university.id} to={`/university/${university.id}`} className="card-link">
              <UniversityCard university={university} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
