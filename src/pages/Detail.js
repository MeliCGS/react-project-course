import React, { useState, useEffect } from 'react'

function Detail({id}) {
    const [ response, setResponse ] = useState({})

    const API_KEY = "e0020d8b";
    const { Title, Poster, Year, Plot } = response

    useEffect(() => {
       fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then(res => res.json())
        .then(details => {
          
            return setResponse(details)
        })
    }, [id])

    const _goBack = () => {
        window.history.back();
    }
    return (
        <div>
            <button onClick={_goBack}>Volver</button>
            <h1>{Title}</h1>
            <img src={Poster} alt={Title} />
            <h2>{Year}</h2>
            <h4>{Plot}</h4>
        </div>
    )
}

export default Detail
