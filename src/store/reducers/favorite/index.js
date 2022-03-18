import { ADD_TO_FAVORITE } from '../../actions/actionsType';

const initialState = {
    favoriteFilms: [],
};
const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVORITE: {
            let data = [...state.favoriteFilms];
            data.push(action.payload);
            return { ...state, favoriteFilms: data };


        }


        default:
            return state;
    }
};

export default favoriteReducer;
