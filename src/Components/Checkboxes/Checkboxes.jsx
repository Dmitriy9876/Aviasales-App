import { useSelector, useDispatch } from 'react-redux';
import styles from './Checkboxes.module.scss';
import { toggleCheckboxes } from '../../store/actions/setCheckboxes';

export default function Checkboxes() {
  const dispatch = useDispatch();
  const checkboxes = useSelector((state) => state.checkboxes);

  const checkboxItems = [
    { name: 'all', label: 'Все', value: 'all' },
    { name: 'noStops', label: 'Без пересадок', value: '0' },
    { name: 'oneStop', label: '1 пересадка', value: '1' },
    { name: 'twoStops', label: '2 пересадки', value: '2' },
    { name: 'threeStops', label: '3 пересадки', value: '3' },
  ];

  const handleCheckboxChange = (name) => {
    dispatch(toggleCheckboxes(name));
  };

  return (
    <div className={styles.filter}>
      <h3 className={styles.filterTitle}>Количество пересадок</h3>
      <form>
        {checkboxItems.map(({ name, label }) => (
          <label
            className={styles.filterItem}
            key={name}
            htmlFor={name}
          >
            <input
              type="checkbox"
              id={name}
              name={name}
              checked={checkboxes[name]}
              onChange={() => handleCheckboxChange(name)}
              className={styles.filterItemInput}
            />
            <span className={styles.checkmark}/>
            {label}
          </label>
        ))}
      </form>
    </div>
  );
}