import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import ListsReducer from './reducer_lists';
import AuthReducer from './reducer_auth';

const rootReducer = combineReducers({
  lists: ListsReducer,
  form: formReducer,
  routing: routerReducer,
  auth: AuthReducer
});

export default rootReducer;
