import React from 'react';
import './DnifUiCards.css'; // Optional for custom styles

const DnifUiCards = () => {
  return (
    <div className="cards-container">
      <div className="card">
        <h3>Dashboard</h3>
        <p>View key insights and visualizations.</p>
        <a href="https://dnif.it/kb/manage-dashboards/create-a-dashboard/">Learn more →</a>
      </div>
      <div className="card">
        <h3>Live Stream</h3>
        <p>Real-time log visibility.</p>
        <a href="https://dnif.it/kb/security-monitoring/streamline-alert-analysis-with-signal-tagging/">Learn more →</a>
      </div>
      <div className="card">
        <h3>Explore</h3>
        <p>Search historical and live events.</p>
        <a href="https://dnif.it/kb/connectors/supported-connectors/1password-connector/">Learn more →</a>
      </div>
    </div>
  );
};

export default DnifUiCards;
