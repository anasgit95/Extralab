
import React, { useState } from 'react';
import './movieDetails.scss'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import ParticleEffectButton from 'react-particle-effect-button'
import moment from 'moment'
function MovieDetails({ movie }) {
    const [commentaire, setCommentaire] = useState("");
    const [hidden, setHidden] = useState(false);
    const [listeDesCommentaire, setListDesCommentaire] = useState([]);

    const { Title, Year, Genre, imdbVotes, Plot, Poster, Language } = movie
    const onClick = () => {
        if (commentaire !== "") {
            let newList = listeDesCommentaire;
            let newCommentaire = {
                text: commentaire,
                date: new Date()
            }
            newList.push(newCommentaire)
            setListDesCommentaire(newList)
            setHidden(true)
            setCommentaire("")
            setTimeout(() => {
                setHidden(false)
            }, 3000);
        }
    }
    return (
        <div className="movie-card">
            <div className="container">
               <img src={Poster} alt="cover" className="cover" /> 
                <div className='hero'


                >
                    <div className="details">
                        <div className="title1">{Title} <span>{Year}</span></div>
                        <div className="title2">{Genre}</div>

                        <Stack spacing={1}>
                            <Rating name="half-rating-read"
                                defaultValue={Math.round(movie.imdbRating / 2)}
                                precision={0.5}
                                readOnly
                            />
                        </Stack>
                        <span className="likes">{imdbVotes} votes</span>
                    </div> {/* end details */}
                </div> {/* end hero */}
                <div className="description">
                    <div className="column1">
                        {Language.split(' ').map(item =>
                            <span className="tag">{item}</span>

                        )}

                    </div> {/* end column1 */}
                    <div className="column2">

                        <p>{Plot}</p>


                        {listeDesCommentaire.map(item =>
                            <div class="res">
                                <img alt="imageCommentaire" className="imageCommentaire" src="https://lh3.googleusercontent.com/ogw/ADea4I7r_cy2tSTeFxB9KMZlGW9yPvGIzmcZFenJMpRBIQ=s32-c-mo" />
                                <div class="text"><h5>Anas Zayene </h5>
                                    <p> {item.text}</p></div>
                                <span className='timecomment'> {moment(item.date).startOf('minute').fromNow()}</span>
                            </div>
                        )
                        }
                        <TextareaAutosize
                            aria-label="minimum height"
                            minRows={3}
                            value={commentaire}
                            onChange={(text) => setCommentaire(text.target.value)}
                            placeholder="Ajouter votre commenataire"
                            style={{
                                width: 466,
                                boxShadow: "rgb(0 0 0 / 24%) 0px 3px 8px",
                                borderRadius: 24,
                                paddingLeft: 10,
                                paddingTop: 10,
                                height: 112,
                                borderColor: "transparent"



                            }}
                        />

                        <ParticleEffectButton
                            color='#121019'
                            hidden={hidden}
                            onClick={onClick}
                            className="buttonAddEffect"
                        >
                            <div className="buttonAdd"
                                onClick={onClick}
                            ><i class="fa fa-paper-plane-o" ></i> Envoyer</div>

                        </ParticleEffectButton>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default MovieDetails;
