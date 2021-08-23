import React, { useState, useEffect } from 'react'
import Header from '../components/Header';

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
        <div className="contentDetail">
            <Header></Header>
            <button onClick={_goBack} className="button-detail"><h3>Volver</h3></button>
            <h1>{Title}</h1>
            <img src={Poster} alt={Title} className="detailMovie" />
            <h2>{Year}</h2>
            <h4>{Plot}</h4>
        </div>
    )
}

export default Detail
