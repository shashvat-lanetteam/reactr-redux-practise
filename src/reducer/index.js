import {combineReducers} from 'redux';
import auth from './auth';
import {routerReducer} from 'react-router-redux';

const rootReducer= combineReducers({auth,router:routerReducer});
export default rootReducer