import { useState } from "react";
import Die from "./components/Die"
import { nanoid } from "nanoid";

const App = () => {

  const [dice, setDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    const newDice = [];
    for(let i=0; i<10; i++) {
      newDice.push({
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
        id: nanoid()
      });
    }
    return newDice;
  }

  const listOfDice = dice.map(dieObj => (
    <Die 
      key={dieObj.id} 
      value={dieObj.value} 
      isHeld={dieObj.isHeld} 
      hold={hold} 
      id={dieObj.id}
    />
  ))

  function rollDice() {
    setDice(generateAllNewDice());
  }

  function hold(id) {
    setDice(prevDice => prevDice.map(die => {
      return die.id === id ? {...die, isHeld: !die.isHeld} : die;
    }))
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