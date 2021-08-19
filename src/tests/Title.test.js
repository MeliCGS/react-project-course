import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Title from '../components/Title'

describe('Pruebas en el componente Title', () => {
    test('El componente deberia renderizar la etiqueta <h2 />', () => {
        const { container } = render(<Title />)
        expect(container).toMatchSnapshot()
    })
})