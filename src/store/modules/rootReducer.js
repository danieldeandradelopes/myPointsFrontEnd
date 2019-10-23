import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import transaction from './transaction/reducer';

export default combineReducers({ auth, user, transaction });
