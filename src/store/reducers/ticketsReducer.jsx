const initialTicketsState = {
  ticketsData: [],
  visibleTickets: 5,
  filterTickets: '',
  loadingTickets: true,
  allTicketsLoaded: false,
};

export const ticketsReducer = (state = initialTicketsState, action) => {
  switch (action.type) {
    case 'SET_TICKETS':
      return {
        ...state,
        ticketsData: action.payload,
        loadingTickets: false
      };
    case 'SHOW_MORE_TICKETS':
      return {
        ...state,
        visibleTickets: state.visibleTickets + 5
      };
    case 'SET_SORT_FILTER':
      return {
        ...state,
        filterTickets: action.payload
      };
    case 'START_LOADING_TICKETS':
      return {
        ...state,
        loadingTickets: true
      };
    case 'FINISH_LOADING_TICKETS':
      return {
        ...state,
        loadingTickets: false
      };
      case 'FINISH_LOADING_ALL_TICKETS':
        return {
          ...state,
          allTicketsLoaded: action.payload
        };
    default:
      return state;
  }
}