import { configureStore } from '@reduxjs/toolkit';
import Slice from './ducks/slice';


const store = configureStore({
  reducer: {
    page: Slice.reducer
  },
});

export default store;