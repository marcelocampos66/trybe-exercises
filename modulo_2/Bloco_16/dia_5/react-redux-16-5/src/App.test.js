import React from 'react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import renderWithRedux from './helpers/renderWithRedux';

import App from './App';

describe('Cadastro de clientes', () => {
  const renderWithRouter = (initialEntries = ['/']) => (
    <Router history={createMemoryHistory({ initialEntries })}>
      <App />
    </Router>
  );

  test('Renderiza a página inicial (Home)', () => {
    const { getByText } = renderWithRedux(
      renderWithRouter(),
      { registerReducer: [], loginReducer: {} },
    );

    const textOfPage = getByText('Bem-vindo ao sistema de cadastramento!');
    expect(textOfPage).toBeInTheDocument();

    const linkElement = getByText('Faça seu Login');
    expect(linkElement).toBeInTheDocument();
  });

  test('Clica no link para página de login e testa login', () => {
    const { getByText, getByTestId } = renderWithRedux(
      renderWithRouter(),
      { registerReducer: [], loginReducer: {} },
    );

    userEvent.click(getByText('Faça seu Login'));

    const inputEmail = getByTestId('input-email');
    const inputSenha = getByTestId('input-senha');
    const buttonLogin = getByTestId('btn-login');

    expect(inputEmail.value).toBe('');

    userEvent.type(inputEmail, 'usuario001');

    expect(inputEmail.value).toBe('usuario001');
    expect(inputSenha.value).toBe('');

    userEvent.type(inputSenha, '1234');

    expect(inputSenha.value).toBe('1234');
    userEvent.click(buttonLogin);

    expect(getByText('Nenhum cliente cadastrado')).toBeInTheDocument();
  });

  test('Quando não há clientes, mostra o link de cadastro', () => {
    const { getByText } = renderWithRedux(
      renderWithRouter(['/clients']),
      { registerReducer: [], loginReducer: { email: 'usuario001', password: '1234' } },
    );

    const clientsInfo = getByText('Nenhum cliente cadastrado');
    expect(clientsInfo).toBeInTheDocument();

    const buttonRegisterClient = getByText('Cadastre agora!');
    expect(buttonRegisterClient).toBeInTheDocument();

    userEvent.click(buttonRegisterClient);
  });

  test('Deve renderizar três pessoas usuárias', () => {
    const { getByText, getByTestId } = renderWithRedux(
      renderWithRouter(['/register']),
      { registerReducer: [], loginReducer: { email: 'usuario001', password: '1234' } },
    );

    const givenUsers = [
      { name: 'Red', age: '11', email: 'kantochampion@pokemon.net' },
      { name: 'Ash', age: '10', email: 'ash@pokemon.net' },
      { name: 'Brock', age: '14', email: 'brock@pokemon.net' },
    ];

    const registerName = getByTestId(/input-register-nome/);
    const registerIdade = getByTestId(/input-register-idade/);
    const registerEmail = getByTestId(/input-register-email/);

    givenUsers.forEach((elem) => {
      expect(registerName.value).toBe('');
      expect(registerIdade.value).toBe('');
      expect(registerEmail.value).toBe('');

      userEvent.type(registerName, elem.name);
      expect(registerName.value).toBe(elem.name);

      userEvent.type(registerIdade, elem.age);
      expect(registerIdade.value).toBe(elem.age);

      userEvent.type(registerEmail, elem.email);
      expect(registerEmail.value).toBe(elem.email);

      userEvent.click(getByText(/Registrar Cliente/i));
    });
  });

  test('Clientes cadastrados devem aparecer após retornar à página de Clientes', () => {
    const { getByText } = renderWithRedux(
      renderWithRouter(['/register']),
      {
        registerReducer: [
          { name: 'Red', age: '11', email: 'kantochampion@pokemon.net' },
          { name: 'Ash', age: '10', email: 'ash@pokemon.net' },
          { name: 'Brock', age: '14', email: 'brock@pokemon.net' },
        ],
        loginReducer: { email: 'usuario001', password: '1234' },
      },
    );

    userEvent.click(getByText(/Ver clientes cadastrados/));

    const user1Name = getByText(/Nome: Red/);
    const user1Email = getByText(/kantochampion@pokemon.net/);
    const user2Name = getByText(/Nome: Ash/);
    const user2Idade = getByText(/10/);
    const user3Name = getByText(/Nome: Brock/);
    const user3Idade = getByText(/14/);

    expect(user1Name).toBeInTheDocument();
    expect(user1Email).toBeInTheDocument();
    expect(user2Name).toBeInTheDocument();
    expect(user2Idade).toBeInTheDocument();
    expect(user3Name).toBeInTheDocument();
    expect(user3Idade).toBeInTheDocument();

    const buttonNewRegisterClient = getByText(/Cadastre outros!/i);
    expect(buttonNewRegisterClient).toBeInTheDocument();
  });

  test('É possível ordenar clientes cadastrados por nome', () => {
    const { getByText, getAllByTestId } = renderWithRedux(
      renderWithRouter(['/clients']),
      {
        registerReducer: [
          { name: 'Red', age: '11', email: 'kantochampion@pokemon.net' },
          { name: 'Ash', age: '10', email: 'ash@pokemon.net' },
          { name: 'Brock', age: '14', email: 'brock@pokemon.net' },
        ],
        loginReducer: { email: 'usuario001', password: '1234' },
      },
    );

    const originalPositions = getAllByTestId(/client-name/i);
    expect(originalPositions[0].textContent).toBe('Nome: Red');
    expect(originalPositions[1].textContent).toBe('Nome: Ash');
    expect(originalPositions[2].textContent).toBe('Nome: Brock');

    const sortButton = getByText(/Ordenar/i);

    userEvent.click(sortButton);
    const sortedPositions = getAllByTestId(/client-name/i);
    expect(sortedPositions[0].textContent).toBe('Nome: Ash');
    expect(sortedPositions[1].textContent).toBe('Nome: Brock');
    expect(sortedPositions[2].textContent).toBe('Nome: Red');

    userEvent.click(sortButton);
    const unsortedPositions = getAllByTestId(/client-name/i);
    expect(unsortedPositions[0].textContent).toBe('Nome: Red');
    expect(unsortedPositions[1].textContent).toBe('Nome: Ash');
    expect(unsortedPositions[2].textContent).toBe('Nome: Brock');
  });

  test('Deve remover uma pessoa usuária após clicarmos no link de Deletar', () => {
    const { getByText, getByTestId, queryAllByTestId } = renderWithRedux(
      renderWithRouter(['/clients']),
      {
        registerReducer: [
          { name: 'Red', age: '11', email: 'kantochampion@pokemon.net' },
          { name: 'Ash', age: '10', email: 'ash@pokemon.net' },
          { name: 'Brock', age: '14', email: 'brock@pokemon.net' },
        ],
        loginReducer: { email: 'usuario001', password: '1234' },
      },
    );

    let users = queryAllByTestId(/client-name/i);

    expect(users.length).toBe(3);

    const user1 = getByText('Nome: Red');
    const user2 = getByText('Nome: Ash');
    const user3 = getByText('Nome: Brock');

    expect(user1).toBeInTheDocument();
    expect(user2).toBeInTheDocument();
    expect(user3).toBeInTheDocument();

    const deleteButton = getByTestId(/button-remove-3/i);

    userEvent.click(deleteButton);
    users = queryAllByTestId(/client-name/i);

    expect(users.length).toBe(2);
    expect(user1).toBeInTheDocument();
    expect(user2).toBeInTheDocument();
    expect(user3).not.toBeInTheDocument();
  });
});
