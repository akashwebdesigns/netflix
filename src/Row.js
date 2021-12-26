import React, { useState, useEffect } from 'react'
import './Row.css';
import axios from './axios';

function Row({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl])

    // async function getTrailer(id){
    //     const req=await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=fc38605e387397dccfd428ce58b32a9d&language=en-US#`);
    //     const key=req.data.results[0].key;
    //     const link=` https://www.youtube.com/watch?v=${key}`;
    //     console.log(link);
    //     <ReactPlayer url={link} />
    // }
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map((movie) => {
                    return (
                        ((isLargeRow && movie.poster_path) ||
                            (!isLargeRow && movie.backdrop_path)) && (
                            <img
                                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                                key={movie.id}
                                // onClick={()=>{
                                //     // console.log(movie)
                                //     getTrailer(movie.id)
                                // }}
                                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                                alt={movie.name}
                            />
                        )
                    )

                })}
            </div>
        </div>
    )
}

export default Row
