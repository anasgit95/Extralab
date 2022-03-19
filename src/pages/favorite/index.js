 
   import React from "react";
   import { useSelector } from 'react-redux'
  import MoviesList from "../home/MoviesList";
   function Favorites() {
    const favoriteFilms = useSelector((state) => state.favoriteFilms)
     return (
      <div>
        <h1 style={{textAlign:"center"}}> Mes films préférés </h1>
         <MoviesList movies={favoriteFilms.favoriteFilms}  favorite={true}/>

      
      
      
       </div>
    );
  }
  
  export default Favorites;
  

  
 