import { combineReducers } from 'redux';
import favoriteReducer from './favorite';
 
// COMBINED REDUCERS
const reducers = {
    favoriteReducer
};

export default combineReducers(reducers);
