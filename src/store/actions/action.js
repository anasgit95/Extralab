import {
    ADD_TO_FAVORITE
  } from './actionsType';
  
 
  export function addToFavorite(payload) {
     return {
      type: ADD_TO_FAVORITE,
      payload,
    };
  }
  
 