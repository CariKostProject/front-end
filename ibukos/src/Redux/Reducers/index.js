import {combineReducers} from 'redux';

import auth from './auth';
import regions from './regions';
import user from './user';
import partner from './partner';
import rooms from './room';
import history from './history';

const appReducer = combineReducers({
  auth,
  regions,
  user,
  partner,
  rooms,
  history,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
