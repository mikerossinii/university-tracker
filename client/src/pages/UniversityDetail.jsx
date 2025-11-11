import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function UniversityDetail() {
  const { id } = useParams();
  const [university, setUniversity] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/universities/${id}`)
      .then(res => res.json())
      .then(data => {
        setUniversity(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching university:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="container"><p>Caricamento...</p></div>;
  if (!university) return <div className="container"><p>Università non trovata</p></div>;

  return (
    <div className="container detail">
      <Link to="/" className="back-link">← Torna alla ricerca</Link>
      
      <div className="detail-header">
        <h1>{university.name}</h1>
        <h2>{university.program}</h2>
        <div className="badges">
          <span className="badge">{university.degree}</span>
          <span className="badge">{university.location.city}</span>
          <span className="badge">⭐ {university.ratings.overall}</span>
        </div>
      </div>

      <div className="detail-grid">
        <section className="detail-section">
          <h3>📚 Informazioni Corso</h3>
          <p><strong>Durata:</strong> {university.duration.years} anni ({university.duration.structure})</p>
          <p><strong>Crediti:</strong> {university.duration.credits} ECTS</p>
          <p><strong>Lingua:</strong> {university.language}</p>
          <p><strong>Studenti per classe:</strong> {university.classSize}</p>
          <p><strong>Materie principali:</strong> {university.courses.mainSubjects.join(', ')}</p>
        </section>

        <section className="detail-section">
          <h3>📅 Scadenze</h3>
          {university.deadlines.earlyRound && (
            <p><strong>Early Round:</strong> {new Date(university.deadlines.earlyRound).toLocaleDateString('it-IT')}</p>
          )}
          <p><strong>Standard Round:</strong> {new Date(university.deadlines.standardRound).toLocaleDateString('it-IT')}</p>
          {university.deadlines.lateRound && (
            <p><strong>Late Round:</strong> {new Date(university.deadlines.lateRound).toLocaleDateString('it-IT')}</p>
          )}
        </section>

        <section className="detail-section">
          <h3>✅ Requisiti</h3>
          <p><strong>GPA:</strong> {university.requirements.gpa}</p>
          <p><strong>Test:</strong> {university.requirements.tests.join(', ')}</p>
          <p><strong>Esperienza:</strong> {university.requirements.experience}</p>
        </section>

        <section className="detail-section">
          <h3>💰 Costi</h3>
          <p><strong>Tasse:</strong> {university.costs.tuition}</p>
          <p><strong>Borse di studio:</strong> {university.costs.scholarships.join(', ')}</p>
          <p><strong>Lavoro on-campus:</strong> {university.costs.onCampusWork ? 'Sì' : 'No'}</p>
        </section>

        <section className="detail-section">
          <h3>💼 Carriera</h3>
          <p><strong>Placement 3 mesi:</strong> {university.career.placementRate3Months}%</p>
          <p><strong>Placement 6 mesi:</strong> {university.career.placementRate6Months}%</p>
          <p><strong>Salario medio:</strong> {university.career.averageSalary}</p>
          <p><strong>All'estero:</strong> {university.career.abroadPercentage}%</p>
          <p><strong>Settori principali:</strong> {university.career.topSectors.join(', ')}</p>
          <p><strong>Top Employer:</strong> {university.career.topEmployers.join(', ')}</p>
        </section>

        <section className="detail-section">
          <h3>🌍 Esperienze Internazionali</h3>
          <p><strong>Scambi:</strong> {university.international.exchanges ? 'Disponibili' : 'Non disponibili'}</p>
          {university.international.exchangePartners && (
            <p><strong>Partner:</strong> {university.international.exchangePartners.join(', ')}</p>
          )}
          <p><strong>Double Degree:</strong> {university.international.doubleDegree.join(', ')}</p>
          <p><strong>Stage:</strong> {university.international.internships}</p>
        </section>

        <section className="detail-section">
          <h3>🏙️ Vita in Città</h3>
          <p><strong>Qualità della vita:</strong> {university.cityLife.qualityOfLife}/5</p>
          <p><strong>Affitto medio:</strong> {university.cityLife.averageRent}</p>
          <p><strong>Facilità affitto:</strong> {university.cityLife.easeOfRenting}</p>
          <p><strong>Vita studentesca:</strong> {university.cityLife.studentLife}</p>
        </section>

        <section className="detail-section">
          <h3>📊 Rankings</h3>
          {university.ratings.qs && <p><strong>QS Ranking:</strong> #{university.ratings.qs}</p>}
          {university.ratings.financial_times && <p><strong>Financial Times:</strong> #{university.ratings.financial_times}</p>}
          <p><strong>Rating complessivo:</strong> {university.ratings.overall}/5</p>
        </section>
      </div>
    </div>
  );
}

export default UniversityDetail;
