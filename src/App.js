import { useState } from 'react'
import Detail from './pages/Detail'
import Search from './components/Search'
import Title from './components/Title'
import Header from './components/Header'
import './App.css';

function App() {

  const [ setResultsSearch ] = useState('')
  const _handleResultsSearch = (resultsSearch) => {
    setResultsSearch({resultsSearch})
  }

  const url = new URL(window.location)
  const hasID = url.searchParams.has('id')

  if(hasID){
    return <Detail id={url.searchParams.get('id')}/>
  }

  return (
    <div className="App">
      <Header />
      <Title>Todo lo que buscas en el mundo del entretenimiento</Title>
      <Search resultSearch={_handleResultsSearch}/>
    </div>
  );
}

export default App;
