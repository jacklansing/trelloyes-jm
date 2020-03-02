import React from 'react';
import './App.css';
import List from './List';
import STORE from '../STORE';

function App() {
  return (
    <main class="App">
    <header class="App-header">
      <h1>Trelloyes!</h1>
    </header>
    <div class="App-list">
      {STORE.lists.map(list => <List 
      key={list.id}
      header={list.header}
      cards={list.cardIds.map(card => STORE.allCards[card])}
      />)}
    </div>
    </main>
  );
}

export default App;
