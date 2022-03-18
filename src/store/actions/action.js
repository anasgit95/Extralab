import {
    ADD_TO_FAVORITE
  } from './actionType';
  
 
  export function addToFavorite(payload) {
    return {
      type: ADD_TO_FAVORITE,
      payload,
    };
  }
  
 