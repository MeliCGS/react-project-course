import React from 'react'

function Movie(props) {
    const { title, year, poster, id } = props
    return (
        <a href={`?id=${id}`}>
            <h1>{title}</h1>
            <img src={poster} alt={title} />
            <h2>{year}</h2>
        </a>
    )
}

export default Movie
