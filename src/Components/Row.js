import "./Row.css";
import { useState, useEffect } from "react";
import requests from "../requests";
import instance from "../axios";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
const baseUrl = "https://image.tmdb.org/t/p/original/";







const Row = ({ title, fetchUrl }) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(fetchUrl);
            // console.log(request.data.results);
            setMovies(request.data.results);

            return request;
        }
        fetchData();

    }, [fetchUrl])

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
          autoplay:1,
        },
      }
        
      const handleClick = (movie) => {
        if(trailerUrl){
          setTrailerUrl("");
        }else{
          movieTrailer(movie.title || movie.name || movie.original_name || "")
          .then((url) => {
            const urlParams = new URLSearchParams( new URL(url).search);
            setTrailerUrl(urlParams.get('v'));
   
          }).catch((error) => console.log(error))
        }
          };



    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters" >

                {movies.map(movie => (
                    <img className="row__poster"
                     onClick={()=> handleClick(movie)}
                
                    key={movie.id} src={`${baseUrl}${movie.poster_path}`} alt={movie.name}>

                    </img>
                ))}


            </div>

           {trailerUrl && <YouTube
             videoId={trailerUrl}
             opts={opts}
            />}


        </div>
    )
}

export default Row

