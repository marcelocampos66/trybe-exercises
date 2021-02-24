import React from 'react';
import DadosPessoais from './DadosPessoais';
import DadosProfissionais from './DadosProfissionais';
import RenderForm from './RenderForm';
import FormError from './FormError';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipo: '',
      resumo: '',
      cargo: '',
      descricao: '',
      formError: {
        name: '',
        email: '',
      },
      enviado: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.validateField = this.validateField.bind(this);
  }

  handleBlur({ target }) {
    // let { value, name } = target;
    console.log(target.value)
  }

  handleReset() {
    this.setState({
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipo: '',
      resumo: '',
      cargo: '',
      descricao: '',
      formError: {},
      enviado: false,
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      enviado: true,
    })
  }

  validateField(fieldName, value) {
    switch(fieldName){
      case 'nome':
        return value.length > 3 ? '' : ' is too short'
      case 'email':
        const isEmailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2})$/i)
        return isEmailValid ? '' : ' is invalid';
      case 'cpf':
        const isCpfValid = value.match(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/)
        return isCpfValid ? '' : ' is invalid';
      default:
        break;
    }
    return ''
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
      formError: {
        [name]: this.validateField(name, value)
      },
    });
  }

  render() {
    const { enviado } = this.state;
    return(
      <form>
        <div className="form-item">
          <div>
            <DadosPessoais
              handleChange={ this.handleChange }
              handleBlur={ this.handleBlur }
            />
          </div>
          <div>
            <DadosProfissionais
              handleChange={ this.handleChange }
            />
          </div>
          <div>
            <button
              onClick={ this.handleSubmit }
            >Enviar</button>
            <button
              onClick={ this.handleReset }
            >Limpar</button>
          </div>
          <div>
            <FormError formError={this.state.formError} />
          </div>
          <div>
            { enviado ? <RenderForm stateAtual={ this.state } /> : null }
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
