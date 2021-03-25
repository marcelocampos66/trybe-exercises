import styles from '../styles/Home.module.css';
import { Component } from 'react';
import { connect } from 'react-redux';
import Adress from '../components/Adress';
import City from '../components/City';
import State from '../components/State';
import Complement from '../components/Complement';
import Name from '../components/Name';
import Email from '../components/Email';
import CPF from '../components/CPF';
import Abstract from '../components/Abstract';
import Office from '../components/Office';
import Description from '../components/Description';
import FormErrors from '../components/FormErrors';
import Informations from '../components/Informations';
import SaveButton from '../components/Button';
import * as infoInput from '../actions/InputActions';
import * as  infoJobs from '../actions/jobInfoActions';
import disableAction from '../actions/disable';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {
        name: '',
        email: '',
        CPF: '',
        adress: '',
        city: '',
        state: '',
        complement: false,
        abstract: '',
        office: '',
      }
    }
    this.handleEvent = this.handleEvent.bind(this);
    this.validateField = this.validateField.bind(this);
  }

  handleEvent({ target }) {
    const {
      handleName,
      handleEmail,
      handleCpf,
      handleAdress,
      handleCity,
      handleState,
      handleComplement,
      handleAbstract,
      handleOffice,
      handleDescription,
    } = this.props;
    const { name } = target;
    switch (name) {
      case 'name':
        handleName(target.value);
        break;
      case 'email':
        handleEmail(target.value);
        break;
      case 'CPF':
        handleCpf(target.value);
        break;
      case 'adress':
        handleAdress(target.value);
        break;
      case 'city':
        handleCity(target.value);
        break;
      case 'state':
        handleState(target.value);
        break;
      case 'complement':
        handleComplement(target.value);
        break;
      case 'abstract':
        handleAbstract(target.value);
        break;
      case 'office':
        handleOffice(target.value);
        break;
      case 'description':
        handleDescription(target.value);
        break;
      default:
    }
  }

  validateField(fieldName, value) {     
    switch (fieldName) {
      case 'name':
        return value.length > 40 ? ' is too long!' : '';
      case 'email':
        const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        return isValid ? '' : ' is invalid';
      case 'CPF':
        return !isNaN(Number(value)) && value.length === 11 ?
         '' : ' is invalid, only numbers and 11 digits';
      case 'adress':
        return value.length > 200 ? ' is too long' : '';
      case 'city':
        return value.length > 28 ? ' is too long': '';
      case 'state':
        return value === 'Escolha seu estado' ? 'is invalid' : '';
      case 'complement':
        return value === false ? 'is required' : '';
      case 'abstract':
        return value.length > 1000 ? 'is too long' : '';
      case 'office':
        return value.length > 40 ? 'is too long' : '';
      case 'description':
        return value.length > 500 ? 'is too long' : '';
      default:
      }
      return '';
  }

  render() {
    const { errors } = this.state;
    const { handleDisable } = this.props;
    return (
      <section className={styles.container}>
        <header>
          <h1>Forms 2.0</h1>
        </header>
          <fieldset className={styles.container2}>
              <Name handleEvent={this.handleEvent} />
              <Email handleEvent={this.handleEvent} />
              <CPF handleEvent={this.handleEvent} />
              <Adress handleEvent={this.handleEvent} />
              <City handleEvent={this.handleEvent}/>
              <State handleEvent={this.handleEvent} />
              <Complement handleEvent={this.handleEvent} />
          </fieldset>
          <fieldset className={styles.container2}>
              <Abstract handleEvent={this.handleEvent} />
              <Office handleEvent={this.handleEvent} />
              <Description handleEvent={this.handleEvent} />
          </fieldset>
          <FormErrors errors={errors} />
        <SaveButton handleClick={() => handleDisable(true)} children="Salvar informações"/>
        <Informations />
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleName: (name) => dispatch(infoInput.nameAction(name)),
  handleEmail: (email) => dispatch(infoInput.emailAction(email)),
  handleCpf: (cpf) => dispatch(infoInput.cpfAction(cpf)),
  handleAdress: (adress) => dispatch(infoInput.adressAction(adress)),
  handleCity: (city) => dispatch(infoInput.cityAction(city)),
  handleState: (state) => dispatch(infoInput.stateAction(state)),
  handleComplement: (bool) => dispatch(infoInput.complementAction(bool)),
  handleAbstract: (abstract) => dispatch(infoJobs.abstractAction(abstract)),
  handleOffice: (office) => dispatch(infoJobs.officeAction(office)),
  handleDescription: (description) => dispatch(infoJobs.descriptionAction(description)),
  handleDisable: (disable) => dispatch(disableAction(disable)),
});

export default connect(null, mapDispatchToProps)(Home);
