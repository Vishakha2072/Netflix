import React, { useEffect, useState } from 'react'
import './Row.css';
import axios from '../../axios';
import YouTube from 'react-youtube';
//import movieTrailer from 'movie-trailer'
import {BiPlay} from 'react-icons/bi'

const baseUrl = "http://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("");
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            //console.log(request.data.results)
            return request;
        }

        fetchData();
    }, [fetchUrl])

    const opts = {
        height: "300",
        width: "50%",
        playerVars: {
            autoplay: 1,
        }
    }

    /*const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.name || "")
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            })
            .catch(() => console.log('Temporary Unavailable'))
        }
    }*/

    const handleClick = async (movie, isLargeRow) => {
      if (trailerUrl) {
        setTrailerUrl("");
      } else if (!isLargeRow) {
        let trailerurl = await axios.get(
          `/movie/${movie.id}/videos?api_key=fb34530271b349314af0de263d16ab5a`
        );
        setTrailerUrl(trailerurl.data.results[0]?.key);
      }
    };

    return (
        <div className = "row">
            <h5>{title}</h5>
            <div className = "row__posters">
                {movies.map(
                  (movie) =>
                   <img 
                        key={movie.id}
                        onClick = {() => handleClick(movie,isLargeRow)}
                        className = {`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src = {`${baseUrl}${
                                    isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                        alt = {movie.name} 
                        />
                )}
            </div>
                       {trailerUrl && <YouTube videoId = {trailerUrl} opts = {opts}/> }
        </div>
    )
}

export default Row