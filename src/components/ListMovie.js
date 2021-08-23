import React from 'react'
import Movie from './Movie'

function ListMovie(props) {

    const { movies } = props
    return (
        <div className="MoviesList">
            {
                movies.results.map(movie => {
                    return (
                        <div key={movie.imdbID} className="MoviesList-item">
                            <Movie 
                                id={movie.imdbID}
                                title={movie.Title}
                                poster={movie.Poster}
                                year={movie.Year}
                            ></Movie>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ListMovie
