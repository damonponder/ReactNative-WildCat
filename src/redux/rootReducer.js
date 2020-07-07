import {combineReducers} from 'redux';
import reducer from './jwt/reducer';
import formReducer from './form/reducer'

export default combineReducers({
  jwt: reducer,
  form:formReducer
});
