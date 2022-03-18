 
   import React from "react";
   import './card.css'
   function Favorites() {
    return (
        <div className="card">
        <a href="#">
          <div className="img1" style={{ backgroundImage: `url(${"http://cima4u.tv/wp-content/uploads/1-71.jpg"})` }}></div>
          <div className="img2" style={{ backgroundImage: `url(${"http://cima4u.tv/wp-content/uploads/1-71.jpg"})` }}></div>
          <div className="title">VIKINGS series Season 1 || Epsoide 1</div>
          <div className="text">Now You can watch the first epsoide of the action series Vikings , wish you interesting watch</div>
          <a href="#"><div className="catagory">Series <i        className="fas fa-film"></i></div></a>
          <a href="#"><div className="views">20211  <i className="far fa-eye"></i> </div></a>
        </a>
      </div>
    );
  }
  
  export default Favorites;
  