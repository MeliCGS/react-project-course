
function Datos(nameValue, onResults) {
    const API_KEY = "e0020d8b";
    const inputMovie = nameValue;
    
       fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
        .then(res => res.json())
        .then(results => {
            const { Search } = results
            return onResults(Search)
        })
    return (
        <> 
        </>
    )
}

export default Datos
