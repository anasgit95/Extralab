
import React, { useState, useEffect } from 'react';
import MovieDetails from '../../components/MovieDetails/index'
import {

    useParams
} from "react-router-dom";
import axios from '../../utils/Api'
import { key } from "../../utils/GlobalKey"

function Movie() {
    const { id } = useParams();
    const [movie, setMovie] = useState();
    const [loader, setLoader] = useState(true);
  
    useEffect(() => {
        axios.get(key + "i="+id).then(response => {
            console.log(response)
            if (response && response.data) {

                setMovie(response.data)
                setLoader(false)

            }
        }
        )
    }, [id]);
     return (
        <div>
            {!loader ?
                <MovieDetails movie={movie} />
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

export default Movie;



