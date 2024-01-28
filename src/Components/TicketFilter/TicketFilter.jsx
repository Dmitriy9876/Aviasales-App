import { useSelector, useDispatch } from 'react-redux';
import { setFilterTickets } from '../../store/actions/getTickets';
import styles from './TicketFilter.module.scss';

export default function TicketFilter() {
  const dispatch = useDispatch();
  const selectedFilter = useSelector(state => state.tickets.filterTickets);

  const filterMap = {
    'Самый дешевый': 'cheapest',
    'Самый быстрый': 'fastest',
    'Оптимальный': 'optimal',
  };

  const handleFilterClick = (filterName) => {
    const filterKey = filterMap[filterName];
    dispatch(setFilterTickets(filterKey));
  }

  const getButtonClassName = (filterName) => (
    `${styles.filterButton} ${selectedFilter === filterMap[filterName] ? styles.selected : ''}`
  );

  return (
    <nav className={styles.ticketFilter}>
      <ul className={styles.ticketFilterList}>
        {Object.keys(filterMap).map((filterName) => (
          <li key={filterName} className={styles.ticketFilterItem}>
            <button
              type='button'
              className={getButtonClassName(filterName)}
              onClick={() => handleFilterClick(filterName)}
            >
              {filterName}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}