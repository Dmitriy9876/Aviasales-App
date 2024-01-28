import PropTypes from 'prop-types';
import { add, parseISO } from 'date-fns';
import styles from './Flight.module.scss';

export default function Flight(props) {
  const { from, to, date, timeTravel, stops } = props;

  const timeOfDeparture = parseISO(date).toString().slice(16, 21);
  const arrivalTime = add(parseISO(date), { minutes: timeTravel }).toString().slice(16, 21);

  const stopsLabel = (() => {
    if (stops.length === 0) {
      return 'без пересадок';
    }
    const labels = { 1: 'пересадка', default: 'пересадки' };
    return labels[stops.length] || labels.default;
  })();

  return (
    <div className={styles.flight}>
      <div className={styles.travelTime}>
        <h4>{from} – {to}</h4>
        <span>{timeOfDeparture} – {arrivalTime}</span>
      </div>
      <div className={styles.routeLength}>
        <h4>В пути</h4>
        <span>{Math.floor(timeTravel / 60)}ч {timeTravel % 60}м</span>
      </div>
      <div className={styles.transfers}>
      <h4>{stops.length > 0 ? `${stops.length} ${stopsLabel}` : stopsLabel}</h4>
        <span className={styles.stopNames}>{stops.join(', ')}</span>
      </div>
    </div>
  );
}

Flight.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeTravel: PropTypes.number.isRequired,
  stops: PropTypes.arrayOf(PropTypes.string).isRequired
}