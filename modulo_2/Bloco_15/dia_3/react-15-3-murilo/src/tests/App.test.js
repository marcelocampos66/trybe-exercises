import React from 'react';
import App from '../App';
import renderWithRouter from './renderWithRouter';
import userEvent from '@testing-library/user-event';

describe('Rotas', () => {
  test('Navegando de About para Comments', () => {
    const { history, getByText } = renderWithRouter(<App />);

    const commentLink = getByText(/Deixe um comentário/i);
    expect(commentLink).toBeInTheDocument();

    userEvent.click(commentLink);
    const { pathname: commentPath } = history.location;
    expect(commentPath).toBe('/comments');

    history.push('/');

    const projectLink = getByText(/projetos/i);
    expect(projectLink).toBeInTheDocument();

    userEvent.click(projectLink);
    const { pathname: projectPath } = history.location;
    expect(projectPath).toBe('/projects');
  })

  test('Indo para uma página não encontrada', () => {
    const { history, getByText } = renderWithRouter(<App />);

    const route = 'mauricio/hamaji';
    history.push(route);

    const pageNotFound = getByText(/Página não encontrada/i);
    expect(pageNotFound).toBeInTheDocument();
  })

  test('Formulário de comentários', () => {
    const { getByText, getByTestId } = renderWithRouter(<App />);

    userEvent.click(getByText(/Deixe um comentário/i));
    const input = getByTestId("input-comment");
    userEvent.type(input, 'Comentário 1');
    userEvent.click(getByTestId("button-comment"));

    expect(getByText(/Comentário 1/i)).toBeInTheDocument();
  })
})