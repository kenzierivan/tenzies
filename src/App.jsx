import { useState } from "react";
import Die from "./components/Die"

const App = () => {

  const [dice, setDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    const newDice = [];
    for(let i=0; i<10; i++) {
      newDice.push(Math.floor(Math.random() * 6) + 1);
    }
    return newDice;
  }

  const listOfDice = dice.map((die, index) => {
    return <Die key={index} number={die} />
  })
  return (
    <main>
      <div className="dice-container">
        {listOfDice}
      </div>
    </main>
  )
}
export default App