function UniversityCard({ university }) {
  return (
    <div className="university-card">
      <div className="card-header">
        <h3>{university.name}</h3>
        <span className="rating">⭐ {university.ratings.overall}</span>
      </div>
      
      <h4>{university.program}</h4>
      
      <div className="card-info">
        <p className="location">📍 {university.location.city}, {university.location.country}</p>
        <p className="degree-type">
          <span className="badge">{university.degree}</span>
        </p>
        <p className="duration">⏱️ {university.duration.years} anni</p>
        <p className="language">🗣️ {university.language}</p>
        <p className="tuition">💰 {university.costs.tuition}</p>
      </div>

      <div className="card-stats">
        <div className="stat">
          <span className="stat-label">Placement 6m</span>
          <span className="stat-value">{university.career.placementRate6Months}%</span>
        </div>
        <div className="stat">
          <span className="stat-label">Salario medio</span>
          <span className="stat-value">{university.career.averageSalary.split('-')[0]}</span>
        </div>
      </div>
    </div>
  );
}

export default UniversityCard;
