import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'myPoints',
      storage,
      whitelist: ['auth', 'user', 'transaction'],
    },
    reducers
  );

  return persistedReducer;
};
