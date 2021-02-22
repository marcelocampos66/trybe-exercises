import React from 'react';
import './App.css';
import Button from './components/Button';
import Toggle from './components/Toggle';
import ButtonWithCount from './components/ButtonWithCount';
import ClickCount from './components/ClickCount';
import Eventos from './components/Eventos';
import BackgroundButtons from './components/BackgroundButtons';

function App() {
  return (
    <div>
      <Button />
      <Toggle />
      <ButtonWithCount name="Button with Count"/>
      <ClickCount />
      <BackgroundButtons />
      <Eventos />
    </div>
  );
}

export default App;
