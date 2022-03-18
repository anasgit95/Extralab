 
   import React from "react";
   import { useSelector } from 'react-redux'

   function Favorites() {
    const favoriteReducer = useSelector((state) => state.favoriteReducer)
    console.log(favoriteReducer)

    return (
      <div> Favorite </div>
    );
  }
  
  export default Favorites;
  