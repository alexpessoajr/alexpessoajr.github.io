
const Job = ({ title, company, description, fromDate, toDate, techStack }) => (
  <div className="md-list-item-text">
    <h3>{title} at {company} ({fromDate} - {toDate || 'Present'})</h3>
    <p>{description}</p>
    <p>{techStack.join(', ')}</p>
  </div>
);
