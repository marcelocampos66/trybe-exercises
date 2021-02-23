import React from 'react';
import './Form.css'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      estadoFavorito: '',
      nome: '',
      email: '',
      idade: 0,
      vaiComparecer: false,
      palavraChaveFavorita: '',
      terms: false,
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name] : value,
    })
  }

  render() {
    return (
      <div className="form-container">
        <h1>Form:</h1>
        <form className="form">
          <fieldset>
            <legend>Informacoes Pessoais</legend>

            <label>
              Diga qual eh o seu estado favorito!
              <textarea 
                name="estadoFavorito"
                onChange={ this.handleChange }
                value={ this.state.estadoFavorito }
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                onChange={ this.handleChange }
                value={ this.state.email }
              />
            </label>

            <label>
              Nome
              <input
                type="text"
                name="nome"
                onChange={ this.handleChange }
                value={ this.state.nome }
              />
            </label>

            <label>
            Idade
            <input
              type="number"
              name="idade"
              onChange={ this.handleChange }
              value={ this.state.idade }
            />
            </label>
          </fieldset>

          <fieldset>
            <legend>Outras Informacoes</legend>

            <label>
            Vai comparecer a conferecia?
            <input
              type="checkbox"
              name="vaiComparecer"
              onChange={ this.handleChange }
              value={ this.state.vaiComparecer }
            />
            </label>

            <label>
              Escolha sua palavra favorita:
              <select
                name="palavraChaveFavorita"
                onChange={ this.handleChange }
                value={ this.state.palavraChaveFavorita }
              >
                <option value="estado">Estado</option>
                <option value="evento">Evento</option>
                <option value="props">Props</option>
                <option value="hooks">Hooks</option>
              </select>
            </label>

            <input type="file" />

            <label>
              <input
                type="checkbox"
                name="terms"
                onChange={ this.handleChange }
              />
              Concordo com termos e acordos
            </label>

          </fieldset>

        </form>
      </div>
    );
  }
}

export default Form;
