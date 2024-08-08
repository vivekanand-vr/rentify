import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Reducers/userSlice';
import { saveStateToLocalStorage, loadStateFromLocalStorage } from '../Services/Utils';

const preloadedState = loadStateFromLocalStorage();

const store = configureStore({
  reducer: userReducer,
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
});

export default store;
