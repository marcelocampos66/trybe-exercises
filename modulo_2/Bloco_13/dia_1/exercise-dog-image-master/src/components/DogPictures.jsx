import React from 'react';
import './DogPictures.css'

class DogPictures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newDog: undefined,
      loading: true,
      name:'',
      dogStorage: [],
    }
    this.fetchDog = this.fetchDog.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.saveDog = this.saveDog.bind(this);
  }

  componentDidMount() {
    // Se o localStorage tiver algo...
    // Logica aqui...
    if (localStorage.dogs) {
      const getStorage = JSON.parse(localStorage.dogs);
      const lastDog = getStorage[getStorage.length - 1];
      this.setState({
        dogStorage: getStorage,
        newDog: lastDog,
        loading: false,
      })
      console.log(lastDog);
    } else {
      // Se nao tiver...
      this.fetchDog();
    }
    
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   const { newDog } = this.state;
  //   if (newDog !== undefined) {
  //     if (nextState.newDog.message.includes('terrier')) {
  //       return false;
  //     }
  //     return true;
  //   }
  //   return true;
  // }

  componentDidUpdate() {
    const { newDog } = this.state;
    // Guarde a url da última imagem gerada no localStorage após cada atualização.
    // Após a atualização do componente, exiba um alert com a raça do doguinho.
    if (newDog !== undefined) {
      const { message } = newDog;
      const dogBreed = message.split('/')[4];
      // alert(dogBreed);
      console.log(dogBreed);
    }
  }

  async fetchDog() {
    this.setState(
      { loading: true },
      async () => {
        const API_URL = 'https://dog.ceo/api/breeds/image/random';
        const requestReturn = await fetch(API_URL);
        const requestObject = await requestReturn.json();
        this.setState({
          newDog: requestObject,
          loading: false,
        })
      }
    )
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({
      name: value,
    })
  }

  saveDog() {
    const { newDog } = this.state;
    if (newDog !== undefined) {
      const { name, newDog: { message }, dogStorage } = this.state
      const dogInfo = {
        name, 
        message,
      };
      this.setState({
        dogStorage: [...dogStorage, dogInfo],
      });
      // Salvar no LocalStorage
      localStorage.setItem('dogs', JSON.stringify(dogStorage));
    }
  }

  render() {
    const { fetchDog } = this;
    const { newDog, loading, name } = this.state;
    const { handleChange, saveDog } = this;
    const loadingElement = 'Loading... wait paciently for ur Dog!'

    if (loading) return loadingElement;
    return (
      <section>
        <p>Dog Pictures</p>
        <button
          type="button"
          onClick={ fetchDog }
        >New Dog!</button>
        <div>
          <img
            className="picture-section"
            src={ newDog.message }
            alt='random dog'
          />
        </div>
        <p>{ newDog.message.split('/')[4] }</p>
        <input
          type="text"
          name="name"
          value={ name }
          onChange={ handleChange }
        />
        <button
          type="button"
          onClick={ saveDog }
        >
          Save Dog!
        </button>
      </section>
    )
  }
}

export default DogPictures;
