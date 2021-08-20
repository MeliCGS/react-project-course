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
}

    return (
        <div>
            <input role="input" onChange={_handleChange} placeholder="escriba aquí" type="text"/>
            <button role="button" onClick={_handleSubmit}>Buscar</button>
            {
                results.length === 0
                ? <h3>Introduzca un título</h3>
                : <ListMovie movies={results} />
            }
        </div>
    )

}

export default Search