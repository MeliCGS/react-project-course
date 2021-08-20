import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Pruebas en el componente App', ()=> {
  test('El componente debería renderiza un elemento tipo Title', () => {
    render(<App />);
    const linkElement = screen.getByText(/Todo lo que buscas en el mundo del entretenimiento/i);
    expect(linkElement).toBeInTheDocument();
  })
})

