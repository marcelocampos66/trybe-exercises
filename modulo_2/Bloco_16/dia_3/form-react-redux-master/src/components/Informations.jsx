import React, { Component } from 'react';
import RemoveButton from './Button';
import { connect } from 'react-redux';
import disableAction from '../actions/disable';

class Informations extends Component {
  handleClick() {
    this.setState({
      disabled: false,
    })
  }

  handleClickRemove() {
    this.setState({
      disabled: true,
    })
  }
  
  render() {
    const {
      handleDisable,
      disable,
      name,
      email, 
      CPF, 
      adress, 
      city, 
      state, 
      complement, 
      abstract, 
      office, 
      description
    } = this.props;

   if (disable === true) {
    return (
      <div>
        <p>{name}</p>
        <p>{email}</p>
        <p>{CPF}</p>
        <p>{adress}</p>
        <p>{city}</p>
        <p>{state}</p>
        <p>{complement}</p>
        <p>{abstract}</p>
        <p>{office}</p>
        <p>{description}</p>
        <RemoveButton handleClick={() => handleDisable(false)} children="Apagar informações" />
      </div>
    );
   }
   return '';
  } 
}

const mapDispatchToProps = (dispatch) => ({
  handleDisable: (disable) => dispatch(disableAction(disable)),
});

const mapStateToProps = (state) => ({
  name: state.inputReducer.name,
  email: state.inputReducer.email,
  cpf: state.inputReducer.cpf,  
  adress: state.inputReducer.adress, 
  city: state.inputReducer.city, 
  state: state.inputReducer.state, 
  complement: state.inputReducer.complement,
  abstract: state.jobInfoReducer.abstract,
  office: state.jobInfoReducer.office,
  description: state.jobInfoReducer.description,
  disable: state.disableReducer.disable,
});
 
export default connect(mapStateToProps, mapDispatchToProps)(Informations);
