
import React, { useState, useEffect } from 'react';
import MoviesList from './MoviesList'
import Search from './Search'
import './home.css'
import axios from '../../utils/Api'
import { key } from "../../utils/GlobalKey"
import Select from '../../components/Select'

function Home() {
  const [movies, setListMovies] = useState([]);
  const [loader, setLoader] = useState(true);

  const getDefaultMovies = () => {
    axios.get(key + "s=morning").then(response => {
      if (response && response.data.Response === "True") {
        setListMovies(response.data.Search)
        setLoader(false)
      }
    }
    )
  }
  useEffect(() => {
    getDefaultMovies()
  }, []);
  const searchButton = (searchName) => {
    setLoader(true)
    if (searchName !== "")
      axios.get(key + "s=" + searchName).then(response => {
        if (response && response.data.Response === "True")
          setListMovies(response.data.Search)
        setLoader(false)

      }


      )
    else getDefaultMovies()

  }
  const trier = (type) => {
    let moviesToSort = [...movies]

    switch (type) {
      case 'Nom':
        moviesToSort.sort((a, b) => a.Title.localeCompare(b.Title))
        setListMovies(moviesToSort)
        break;
      case 'Type':
        moviesToSort.sort((a, b) => a.Type.localeCompare(b.Type))
        setListMovies(moviesToSort)
        break;
      case 'Date':
        moviesToSort.sort((a, b) => new Date(b.Year.slice(0, b.Year.indexOf('–'))) - new Date(a.Year.slice(0, b.Year.indexOf('–'))))
        setListMovies(moviesToSort)
        break;
        default:return "ok"

    }
  }
  return (
    <div className="home">
      <div className='selectcss'>
        <Select trier={trier} />
      </div>

      <Search searchButton={searchButton} />
      {!loader ?
        <MoviesList movies={movies} />
        : <div className="divLoader" >
          <img
            alt="logo"
            src="https://uploads-ssl.webflow.com/5feaf7c497cb0605ecb0f1d9/604276a0765c446df49e6d3b_logo-final-form-dark-p-2000.png"
            className='rotate'

          /> </div>
      }
    </div>
  );
}

export default Home;
