import { Component, Fragment } from 'react';

class State extends Component {

  render() { 
    const states = [
      'Escolha seu estado',
      'AC - Acre',
      'AL - Alagoas',
      'AP - Amapá',
      'AM - Amazonas',
      'BA - Bahia',
      'CE - Ceará',
      'DF - Distrito Federal',
      'ES - Espírito Santo',
      'GO - Goías',
      'MA - Maranhão',
      'MT - Mato Grosso',
      'MS - Mato Grosso do Sul',
      'MG - Minas Gerais',
      'PA - Pará',
      'PB - Paraíba',
      'PR - Paraná',
      'PE - Pernambuco',
      'PI - Piauí',
      'RJ - Rio de Janeiro',
      'RN - Rio Grande do Norte',
      'RS - Rio Grande do Sul',
      'RO - Rondônia',
      'RR - Roraíma',
      'SC - Santa Catarina',
      'SP - São Paulo',
      'SE - Sergipe',
      'TO - Tocantins'
      ];
    const { value, handleEvent} = this.props;
    return (
      <Fragment>
        <select name='state' value={value} onChange={handleEvent}>
          {states.map((state) => <option id={state}>{state}</option>)}
        </select>
      </Fragment>
    );
  }
}
 
export default State;