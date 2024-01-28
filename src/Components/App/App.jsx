import { Provider } from 'react-redux';
import { store } from '../../store/store';
import logoImg from '../../img/logo.png';
import Checkboxes from '../Checkboxes/Checkboxes';
import ScrollUp from '../ScrollUp/ScrollUp';
import TicketFilter from '../TicketFilter/TicketFilter';
import TicketsList from '../TicketsList/TicketsList';
import ShowMore from '../ShowMore/ShowMore';
import styles from './App.module.scss';

export default function App() {
  return (
    <Provider store={store}>
      <div className={styles.app}>
      <a href="/">
        <img className={styles.logo} src={logoImg} alt="Logo" />
      </a>
        <div className={styles.wrapperContent}>
          <Checkboxes />
          <ScrollUp />
          <div className={styles.wrapperTickets}>
            <TicketFilter />
            <TicketsList />
            <ShowMore />
          </div>
        </div>
      </div>
    </Provider>
  );
}