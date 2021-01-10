import { configureStore } from '@reduxjs/toolkit'; // RTK

import reducer from './slice';

const store = configureStore({ reducer });

export default store;
