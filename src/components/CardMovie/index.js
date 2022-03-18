 
   import React from "react";
   import './card.css'
   

   function Favorites({movie}) {

    const {Poster,Title,Type,Year,imdbID} = movie
    return (
        <div className="card">
              <button class="buttonAdd"><i class="fa fa-plus"></i> Ajouter au favoris</button>

         
      <a href="#">
          <div className="img1" style={{ backgroundImage: `url(${Poster})` }}></div>
          <div className="img2" style={{ backgroundImage: `url(${Poster})` }}></div>
          <div className="title">{Title}</div>
          <div className="text">{Title}</div>
          <a href="#"><div className="catagory">{Type} <i        className="fas fa-film"></i></div></a>
          <a href="#"><div className="views">{Year}  <i className="far fa-eye"></i> </div></a>
         
        </a>
        
        
       </div>
    );
  }
  
  export default Favorites;
  