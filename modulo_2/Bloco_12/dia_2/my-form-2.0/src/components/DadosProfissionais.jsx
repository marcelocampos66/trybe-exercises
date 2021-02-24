import React from 'react';

class DadosProfissionais extends React.Component {
  render() {
    const { handleChange } = this.props;
    return (
      <fieldset>
        <legend>Dados Profissionais:</legend>

        <label>
          Resumo do currículo:
          <textarea
            name="resumo"
            maxLength="1000"
            required
            onChange={ handleChange }
          />
        </label>

        <label>
          Cargo:
          <input
            name="cargo"
            type="text"
            maxLength="40"
            required
            onChange={ handleChange }
            // onMouseEnter={ () => alert('Preencha com cuidado esta informação.') }
          />
        </label>

        <label>
          Descricao:
          <input
            type="text"
            name="descricao"
            maxLength="500"
            onChange={ handleChange }
          />
        </label>

      </fieldset>
    );
  }
}

export default DadosProfissionais;
