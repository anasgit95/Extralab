import { combineReducers } from 'redux';
import favoriteReducer from './favorite';
 
// COMBINED REDUCERS
const rootReducer = combineReducers({
	favoriteFilms: favoriteReducer,
 })

export default rootReducer;
