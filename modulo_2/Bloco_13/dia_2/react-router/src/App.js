import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Children from "./components/Children/Children";
import Home from "./components/Home/Home"
import About from './components/Home/About';
import HowTo from './components/Home/HowTo';
import Profile from './components/Home/Profile';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Children>
          <p>OLA MEU CHAPA</p>
          <p>Hello world!</p>
          <span>Agora eu entendi!</span>
        </Children>
        <BrowserRouter>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about" component={ About } />
          <Route path="/howto" component={ HowTo } />
          <Route path="/profile/:ship" render={ (props)=> <Profile { ...props } name="Barbanegra, o berserker da web" /> } />
        </BrowserRouter>
      </div>
    )
  }
}

// Anotacoes

// Tanto component quanto render permitem que você tenha acesso a informações de rota ( match , location e history ) via props do componente que você está mapeando. Ou seja, se você tem a rota <Route path="/about" component={About} /> , About terá match , location e history setadas via props.

// Caso o ComponentePai esteja com mais de um elemento dentro, props.children se torna um array de objetos , com as informações de cada filho.

// 

export default App;
