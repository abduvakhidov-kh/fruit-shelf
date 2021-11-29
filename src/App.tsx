import React from "react";
import "./App.css";
import Fruit from "./components/Fruit/Fruit.comp";
import FruitBox from "./components/FruitBox/FruitBox.comp";

import lemon from "./assets/img/lemon.png";
import orange from "./assets/img/orange.png";
import apple from "./assets/img/apple.webp";
import FruitShelf from "./components/FruitShelf/FruitShelf.comp";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <FruitShelf>
          <FruitBox defaultKind={orange} defaultSize={4}>
            <Fruit />
            <Fruit kind={apple} size={1} />
            <Fruit />
          </FruitBox>
          <FruitBox defaultKind={apple} defaultSize={4}>
            <Fruit />
            <Fruit />
            <Fruit kind={lemon} size={3} />
          </FruitBox>
        </FruitShelf>
      </header>
    </div>
  );
};

export default App;
