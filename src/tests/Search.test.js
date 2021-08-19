import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import Search from '../components/Search'
import { screen } from '@testing-library/dom'
import { render } from '@testing-library/react'

describe('Pruebas en el componente Search', () => {
   beforeEach(() => {
      render(<Search />)
    });

   test('El componente Search se renderiza', () => {
      const { container } = render(<Search />)
      expect(container).toMatchSnapshot()
   })
   test('El componente Search deberia renderizar el Título', () => {
      const titleSearch = screen.getByText(/Introduzca un título/i)
      expect(titleSearch).not.toBeFalsy()
   })
   test('El componente Search deberia incluir el texto del boton', () => {
      const btnSearch = screen.getByText(/Buscar/i)
      expect(btnSearch).not.toBeFalsy()
   })
   test('El componente Search deberia incluir un elemento input', () => {
      const getInput = screen.getByRole("input")
      expect(getInput).toBeInTheDocument()
   })
   test('En el input del Search deberia contener un texto placeHolder', () => {
      const text = "escriba aquí"
      const getInput = screen.getByPlaceholderText('escriba aquí')
      expect(getInput).toBeInTheDocument()
   })
})

