import PropTypes from 'prop-types';
import Flight from './Flight/Flight';
import styles from './Ticket.module.scss';

export default function Ticket(props) {
  const { price, carrier, segments } = props;
  const imgUrl = `https://pics.avs.io/99/36/${carrier}.png`

  const formattedPrice = price.toLocaleString('ru-RU');

  return (
    <div className={styles.ticket}>
      <div className={styles.ticketHeader}>
        <span className={styles.ticketPrice}>{`${formattedPrice} р`}</span>
        <img src={imgUrl} alt="Logo company" />
      </div>
      <Flight from={segments[0].origin}
              to={segments[0].destination}
              date={segments[0].date}
              timeTravel={segments[0].duration}
              stops={segments[0].stops}
      />
      <Flight from={segments[1].origin}
              to={segments[1].destination}
              date={segments[1].date}
              timeTravel={segments[1].duration}
              stops={segments[1].stops}
      />
    </div>
  );
}

Ticket.propTypes = {
  price: PropTypes.number.isRequired,
  carrier: PropTypes.string.isRequired,
  segments: PropTypes.arrayOf(PropTypes.shape({
    origin: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    stops: PropTypes.arrayOf(PropTypes.string).isRequired
  })).isRequired
}