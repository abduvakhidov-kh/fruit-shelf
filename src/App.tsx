import React from 'react';
import './App.css';
import Fruit from './components/Fruit/Fruit.component';
import lemon from './assets/img/lemon.png'
import orange from './assets/img/orange.png'
import apple from './assets/img/apple.png'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo">
          <Fruit kind = {lemon} size={1}/>
        </div>
        <div className="App-logo">
          <Fruit kind = {orange} size={2}/>
        </div>
        <div className="App-logo">
          <Fruit kind = {apple} size={3}/>
        </div>

      </header>
    </div>
  );
}

export default App;