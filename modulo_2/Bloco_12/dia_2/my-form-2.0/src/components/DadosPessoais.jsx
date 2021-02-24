import React from 'react';

const estados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];

class DadosPessoais extends React.Component {
  render() {
    const { handleChange, handleBlur } = this.props;
    return (
      <fieldset>
        <legend>Dados Pessoais:</legend>

        <label>
          Nome:
          <input
            type="text"
            name="nome"
            maxLength="40"
            required
            onChange= { handleChange }
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            maxLength="50"
            required
            onChange= { handleChange }
          />
        </label>

        <label>
          CPF:
          <input
            type="text"
            name="cpf"
            maxLength="14"
            required
            onChange= { handleChange }
          />
        </label>

        <label>
          Endereço:
          <input
            type="text"
            name="endereco"
            maxLength="200"
            required
            onChange= { handleChange }
          />
        </label>

        <label>
          Cidade:
          <input
            type="text"
            name="cidade"
            maxLength="28"
            required
            onChange= { handleChange }
            onBlur= { handleBlur }
          />
        </label>

        <label>
          Estado:
          <select
            name="estado"
            required
            onChange={ handleChange }
          >
            <option value="">Selecione um estado</option>
            {
              estados.map(estado => (
                <option key={estado}>{estado}</option>
              ))
            }
          </select>
        </label>

        <label>
          Tipo:
          <input
            type="radio"
            name="tipo"
            value="casa"
            onChange= { handleChange }
          /> Casa
          <input
            type="radio"
            name="tipo"
            value="apartamento"
            onChange= { handleChange }
          /> Apartamento
        </label>

      </fieldset>
    );
  }
}

export default DadosPessoais;
