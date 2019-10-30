import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import transaction from './transaction/sagas';

export default function* rootSaga() {
  return yield all([auth, user, transaction]);
}
