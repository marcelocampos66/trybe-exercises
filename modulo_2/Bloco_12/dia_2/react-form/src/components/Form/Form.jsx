import React from 'react';
import './Form.css';
import EstadoFavorito from './EstadoFavorito';
import Email from './Email';

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
        <h1>Form 1:</h1>
        <form className="form">
          <fieldset>
            <legend>Informacoes Pessoais</legend>

            <div className="form-item">
              <EstadoFavorito
                value={this.state.estadoFavorito}
                handleChange={ this.handleChange }
              />
            </div>

            <div className="form-item">
              <Email
                value={ this.state.email }
                handleChange={ this.handleChange }
              />
            </div>

            <div className="form-item">
              <label>
                Nome
                <input
                  type="text"
                  name="nome"
                  onChange={ this.handleChange }
                  value={ this.state.nome }
                />
              </label>
            </div>

            <div className="form-item">
              <label>
                Idade
                <input
                  type="number"
                  name="idade"
                  onChange={ this.handleChange }
                  value={ this.state.idade }
                />
              </label>
            </div>

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
