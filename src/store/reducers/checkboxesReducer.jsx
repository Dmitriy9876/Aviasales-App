const initialCheckboxestate = {
  all: true,
  noStops: true,
  oneStop: true,
  twoStops: true,
  threeStops: true,
};

export const filterReducer = (state = initialCheckboxestate, action) => {
  let newState;

  switch (action.type) {
    case 'TOGGLE_CHEKBOXES':
      newState = { ...state, [action.payload]: !state[action.payload] };

      if (action.payload === 'all') {
        Object.keys(newState).forEach(key => {
          newState[key] = newState.all;
        });
      } else {
        const allCheckboxesSelected = Object.keys(newState)
          .filter(key => key !== 'all')
          .every(key => newState[key]);

        newState.all = allCheckboxesSelected;
      }

      return newState;
    default:
      return state;
  }
}