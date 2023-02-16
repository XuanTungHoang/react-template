import { combineReducers } from 'redux';
import global, { GobalState } from './Global/reducer';
import user, { UserState } from './User/reducer';

export interface RootReducer {
  user?: UserState;
  global?: GobalState;

}

const rootReducer = combineReducers({
  user,
  global,
 
});

export default rootReducer;
