
import React, { useState } from 'react';
import './card.css'
import ParticleEffectButton from 'react-particle-effect-button'
import {addToFavorite} from '../../store/actions/action'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';

function CardMovie({ movie }) {
  const dispatch = useDispatch()

  const [hidden, setHidden] = useState(false);

  const { Poster, Title, Type, Year, imdbID } = movie
  const onClick = (e) => {
    e.preventDefault()
    setHidden(true)
    dispatch(addToFavorite(movie))

  }
   return (
    <div className="card">
      <ParticleEffectButton
        color='#121019'
        hidden={hidden}
        onClick={onClick}
        className="buttonAddEffect"
      >
        <div className="buttonAdd"
          onClick={onClick}
        ><i class="fa fa-plus" ></i> Ajouter au favoris</div>

      </ParticleEffectButton>
      <Link to={"/Movie/"+imdbID}>
        <div className="img1" style={{ backgroundImage: `url(${Poster})` }}></div>
        <div className="img2" style={{ backgroundImage: `url(${Poster})` }}></div>
        <div className="title">{Title}</div>
         <a href="#"><div className="catagory">{Type} <i className="fas fa-film"></i></div></a>
        <a href="#"><div className="views">{Year}  <i className="far fa-eye"></i> </div></a>

      </Link>


    </div>
  );
}

export default CardMovie;
