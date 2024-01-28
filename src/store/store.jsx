import { configureStore } from '@reduxjs/toolkit';
import { ticketsReducer } from './reducers/ticketsReducer';
import { filterReducer } from './reducers/checkboxesReducer';

export const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
    checkboxes: filterReducer
  },
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
})