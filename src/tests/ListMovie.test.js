import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import ListMovie from '../components/ListMovie'
import Datos from '../components/Datos'

describe('Pruebas en el componente ListMovie', () => {
    test('El componente puede pasar los datos por paramero', done => {
        Datos('avengers', results => {
            const { container } = render(<ListMovie movies={{ results }} />)
            expect(container).toMatchSnapshot()
            done()
        })
    })
})

