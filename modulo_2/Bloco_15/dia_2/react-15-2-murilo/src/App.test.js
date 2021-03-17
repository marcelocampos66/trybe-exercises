import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App.js', () => {
  test('Verifica se aparece o título da aplicação', () => {
    render(<App />)

    const title = screen.getByRole('heading', {
      level: 1,
    })

    expect(title).toBeInTheDocument();
  })

  test('Verifica se o input e o botão estão aparecendo', () => {
    render(<App />)

    const inputText = screen.getByRole('textbox');
    const buttonSearch = screen.getByRole('button', {
      name: 'Pesquisar'
    });

    expect(inputText).toBeInTheDocument();
    expect(buttonSearch).toBeInTheDocument();
  })

  test('Verifica a digitação do input', () => {
    render(<App />)

    const inputText = screen.getByRole('textbox');

    userEvent.type(inputText, 'pikachu');

    expect(inputText).toHaveValue('pikachu');
  })

  test('Verifica se as informações do pokemon aparece na tela', async () => {
    const pokemonMock = {
      cards: [
        {
          id: "xyp-XY174",
          name: "Pikachu-EX",
          nationalPokedexNumber: 25,
          imageUrl: "https://images.pokemontcg.io/xyp/XY174.png",
          imageUrlHiRes: "https://images.pokemontcg.io/xyp/XY174_hires.png",
          types: [
            'Lightning'
          ],
        }
      ]
    }

    global.fetch = jest.fn().mockResolvedValue({
      json: async () => pokemonMock
    })

    render(<App />)

    const inputText = screen.getByRole('textbox');
    const buttonSearch = screen.getByRole('button', {
      name: 'Pesquisar'
    });

    userEvent.type(inputText, 'pikachu');
    userEvent.click(buttonSearch);

    const pokemonName = await screen.findByRole('heading', {
      level: 3,
      name: 'Pikachu-EX'
    })

    expect(pokemonName).toBeInTheDocument();
  })
})