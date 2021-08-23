import React from 'react'

function Movie(props) {
    const { title, year, poster, id } = props
    return (
        <a role="link" href={`?id=${id}`} className="link-movie">
            <h3>{title}</h3>
            <img src={poster} alt={title} />
            <h2>{year}</h2>
        </a>
    )
}

export default Movie
