export const showMoreTickets = () => ({
  type: 'SHOW_MORE_TICKETS'
})

export const setFilterTickets = (filterType) => ({
  type: 'SET_SORT_FILTER',
  payload: filterType,
});

export const startLoadingTickets = () => ({
  type: 'START_LOADING_TICKETS'
});

export const finishLoadingTickets = () => ({
  type: 'FINISH_LOADING_TICKETS'
});

export const finishLoadingAllTickets = () => (dispatch) => {
  dispatch({ type: 'FINISH_LOADING_ALL_TICKETS', payload: 'download complete' });
  setTimeout(() => {
    dispatch({ type: 'FINISH_LOADING_ALL_TICKETS', payload: true });
  }, 2000);
};

export const getTickets = () => async dispatch => {
  const setTickets = tickets => ({
    type: 'SET_TICKETS',
    payload: tickets,
  });

  let allTickets = [];

  const fetchTickets = async (searchId) => {

    try {
      const ticketsResponse = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
      if (!ticketsResponse.ok) {
        throw new Error(`Network response was not ok for tickets, status: ${ticketsResponse.status}`);
      }

      const { tickets, stop } = await ticketsResponse.json();
      allTickets = [...allTickets, ...tickets];
      dispatch(setTickets(allTickets));

      if (stop) {
        dispatch(finishLoadingAllTickets());
      } else {
        await fetchTickets(searchId);
      }
    } catch (error) {
        await fetchTickets(searchId);
      }
  };

  try {
    const response = await fetch('https://aviasales-test-api.kata.academy/search');
    if (!response.ok) throw new Error('Network response was not ok for searchId');

    const { searchId } = await response.json();
    if (!searchId) return;

    await fetchTickets(searchId);
  } catch (error) {
    console.error('Произошла ошибка при получении searchId:', error);
  }
}