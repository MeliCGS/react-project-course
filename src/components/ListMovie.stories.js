import React from 'react'
import ListMovie from './ListMovie'
import Datos from '../components/Datos'
import { render } from '@testing-library/react'

export default {
    title: "ListMovie",
    component: ListMovie
}

export const ListMovieExample = () => (
        Datos('avengers', results => {render(<ListMovie movies={{ results }} />)
    })
)