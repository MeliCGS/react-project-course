import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import Movie from '../components/Movie'

describe('Pruebas en el componente Movie', () => {
    test('El componente deberia renderizar un elemento tipo link', () => {
        render(<Movie />)
        const getLink = screen.getByRole("link")
        expect(getLink).toBeInTheDocument()
    })
})