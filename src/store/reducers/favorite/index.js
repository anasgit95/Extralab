import { ADD_TO_FAVORITE } from '../../actions/actionsType';

const initialState = {
  favoriteFilms: [],
 };
const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      return {
        ...state,
        customer: action.payload,
     
    };

    
    default:
      return state;
  }
};

export default favoriteReducer;