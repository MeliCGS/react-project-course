import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import Header from '../components/Header'

describe('Pruebas en el componente Header', () => {
    test('El componente deberia contener la clase header', () => {
        const {container} = render(<Header />)
        const element = screen.getByTestId('headerClass')
        expect(element).toHaveClass("header")
    })
    test('El componente deberia contener la clase container', () => {
        const {container} = render(<Header />)
        const element = screen.getByTestId('headerClass')
        expect(container.firstChild).toHaveClass('container')
    })
})