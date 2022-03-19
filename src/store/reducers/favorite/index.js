import { ADD_TO_FAVORITE } from '../../actions/actionsType';

const initialState = {
    favoriteFilms: [],
};
const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVORITE: {
            let data = [...state.favoriteFilms];
            let index = data.findIndex(item=>item.imdbID===action.payload.imdbID)
            if(index===-1)
            data.push(action.payload);
            return { ...state, favoriteFilms: data };


        }


        default:
            return state;
    }
};

export default favoriteReducer;
