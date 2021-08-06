import { useState } from 'react'
import  Datos  from './Datos'
import ListMovie from './ListMovie'


function Search(props) {

const [ search, setSearch] = useState('')
const [ results, setResults ] = useState([])

const _handleChange = (e) => {
  setSearch(e.target.value)
}

const _handleResults = (results) => {
    setResults({results})
  }

const _handleSubmit = () => {
    Datos(search, _handleResults)
    alert(search) 
}

    return (
        <div>
            <input onChange={_handleChange} type="text"/>
            <button onClick={_handleSubmit}>Buscar</button>
            {
                results.length === 0
                ? <h1>Introduzca un título</h1>
                : <ListMovie movies={results} />
            }
        </div>
    )

}

export default Search