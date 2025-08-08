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
    setDice(prevDice => prevDice.map(die => {
      return die.isHeld ? die : {
        ...die, value: Math.floor(Math.random() * 6) + 1
      }
    }))
  }

  function hold(id) {
    setDice(prevDice => prevDice.map(die => {
      return die.id === id ? {...die, isHeld: !die.isHeld} : die;
    }))
  }


  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
        {listOfDice}
      </div>

      <button className="roll-button" onClick={rollDice}>Roll</button>
    </main>
  )
}
export default App