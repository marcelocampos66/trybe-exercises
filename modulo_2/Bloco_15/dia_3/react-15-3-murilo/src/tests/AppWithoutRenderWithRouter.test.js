import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Rotas', () => {
  test('Navegando de About para Comments', () => {
    const history = createMemoryHistory();
    render(<Router history={history}>
      <App />
    </Router>)

    const personalInfo = screen.getByText(/Deixe um comentário/i);
    expect(personalInfo).toBeInTheDocument();
  })
})