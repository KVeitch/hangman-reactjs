import React from 'react';
import './App.css';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters  from './components/WrongLetters';
import Word  from './components/Word';

function App() {
  return (
    <>
      <Header />
      <Figure />
      <WrongLetters />

    </>
  );
}

export default App;
