 
   import React from "react";
    import MoviesList from './MoviesList'
    import Search from './Search'
    import './home.css'
   function Home() {
    return (
      <div className="home"> 
          <Search/>
          <MoviesList/>
           </div>
    );
  }
  
  export default Home;
  