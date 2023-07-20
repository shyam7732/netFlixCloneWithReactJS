import React, { useEffect, useState } from 'react'
import axios from './axios'
import "./Row.css"

function Row(props) {

    const imgFullPath = "https://image.tmdb.org/t/p/original"
    const [movie, setMovie] = useState([])

    useEffect(() => {
        axios.get(props.endPoint)
        .then((result) => {
            console.log(result.data.results)
            setMovie(result.data.results)
        })
    }, [])

  return (
    <>
        <div className={props.isBigger ? "row bigger" : "row"}>
            <h1>{props.heading}</h1>
            <div className="movies">
                {
                    movie.map((movies, index) => {
                        return(
                            <img src={imgFullPath+movies.poster_path} alt={movies.title || movies.original_title} key={index} />
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}

export default Row