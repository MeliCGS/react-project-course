import React from 'react'
import Movie from './Movie'

function ListMovie(props) {

    const { movies } = props
    return (
        movies.results.map(movie => {
            return (
                <div key={movie.imdbID}>
                    <Movie 
                        id={movie.imdbID}
                        title={movie.Title}
                        poster={movie.Poster}
                        year={movie.Year}
                    ></Movie>
                </div>
            )
        })
    )
}

export default ListMovie
