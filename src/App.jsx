import { useState } from "react";
import Die from "./components/Die"

const App = () => {

  const [dice, setDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    const newDice = [];
    for(let i=0; i<10; i++) {
      newDice.push({
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: false
      });
    }
    return newDice;
  }

  const listOfDice = dice.map((die, isHeld, index) => {
    return <Die key={index} value={die} />
  })

  function rollDice() {
    setDice(generateAllNewDice());
  }
  return (
    <main>
      <div className="dice-container">
        {listOfDice}
      </div>

      <button className="roll-button" onClick={rollDice}>Roll</button>
    </main>
  )
}
export default App