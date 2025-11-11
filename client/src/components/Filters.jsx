function Filters({ filters, setFilters }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="filters">
      <h2>Filtri</h2>
      <div className="filter-grid">
        <div className="filter-group">
          <label htmlFor="degree">Tipo di Laurea</label>
          <select 
            id="degree"
            name="degree" 
            value={filters.degree} 
            onChange={handleChange}
          >
            <option value="">Tutte</option>
            <option value="triennale">Triennale</option>
            <option value="magistrale">Magistrale</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="minRating">Rating Minimo</label>
          <select 
            id="minRating"
            name="minRating" 
            value={filters.minRating} 
            onChange={handleChange}
          >
            <option value="0">Tutti</option>
            <option value="3">3+ ⭐</option>
            <option value="4">4+ ⭐</option>
            <option value="4.5">4.5+ ⭐</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="language">Lingua</label>
          <input 
            id="language"
            type="text"
            name="language" 
            placeholder="es. Inglese"
            value={filters.language} 
            onChange={handleChange}
          />
        </div>

        <div className="filter-group">
          <label htmlFor="city">Città</label>
          <input 
            id="city"
            type="text"
            name="city" 
            placeholder="es. Milano"
            value={filters.city} 
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Filters;
