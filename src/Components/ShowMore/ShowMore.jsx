import { useSelector, useDispatch } from 'react-redux';
import { showMoreTickets } from '../../store/actions/getTickets';
import styles from './ShowMore.module.scss';

export default function ShowMore() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.tickets.loadingTickets);
  const checkboxes = useSelector(state => state.checkboxes);
  const areAllCheckboxesFalse = Object.values(checkboxes).every(value => !value);

  const handleShowMoreClick = () => {
    dispatch(showMoreTickets());
  };

  if (isLoading || areAllCheckboxesFalse) {
    return null;
  }

  return (
    <button type='button' className={styles.showMoreBtn} onClick={handleShowMoreClick}>
      Показать еще 5 билетов!
    </button>
  );
}