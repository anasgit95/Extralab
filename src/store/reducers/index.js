import { combineReducers } from 'redux';
import favoriteReducer from './favorite';
 
// COMBINED REDUCERS
const rootReducer = combineReducers({
	favoriteReducer: favoriteReducer,
 })

export default rootReducer;
