import { Trophy } from 'lucide-react';
import './PerformersList.css';

/**
 * PerformersList Component
 * 
 * Displays a ranked list of top workshop performers or contributors.
 * Includes a rank, name, and total workshop count for each entry.
 * 
 * @param {Object} props - Component props
 * @param {string} [props.title="Top Performers"] - Heading for the list section
 * @param {Array<Object>} props.performers - List of performer objects
 * @param {string} props.performers[].name - Name of the performer
 * @param {number} props.performers[].count - Number of workshops conducted
 * @returns {JSX.Element} The rendered PerformersList component
 */
const PerformersList = ({ title = "Top Performers", performers = [] }) => {
  return (
    <div className="card glass highlight performers-container">
      <div className="performers-header">
        <Trophy size={20} className="trophy-icon" />
        <h2>{title}</h2>
      </div>
      <ul className="performers-list">
        {performers.map((performer, index) => (
          <li key={index} className="performer-item">
            <span className="performer-rank">{index + 1}</span>
            <span className="performer-name">{performer.name}</span>
            <span className="performer-count">{performer.count} Workshops</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PerformersList;
