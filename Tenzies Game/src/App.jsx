import React from "react";
import { useState } from "react";
import Dice from "./components/Dice";
import { nanoid } from "nanoid";
import { useEffect } from "react";

export default function App() {
  const [rollDice, setRollDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const allHeld = rollDice.every((item) => item.isHeld);
    const firstValue = rollDice[0].value;
    const allValue = rollDice.every((item) => item.value === firstValue);
    if (allHeld && allValue) {
      setTenzies(true);
      console.log("you won");
    }
  }, [rollDice]);

  function allNewDice() {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return arr;
  }

  function diceRoll() {
    // setRollDice(allNewDice());
    if (!tenzies) {
      setRollDice((oldDice) =>
        oldDice.map((item) => {
          return item.isHeld
            ? item
            : {
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid(),
              };
        })
      );
    } else {
      setTenzies(false);
      setRollDice(allNewDice());
    }
  }

  function holdDice(id) {
    setRollDice((oldDice) =>
      oldDice.map((item) => {
        return item.id === id ? { ...item, isHeld: !item.isHeld } : item;
      })
    );
  }

  const diceElements = rollDice.map((item) => {
    return (
      <Dice
        value={item.value}
        key={item.id}
        isHeld={item.isHeld}
        holdDice={() => holdDice(item.id)}
      />
    );
  });

  return (
    <main>
      <div className="content">
        <h1>Tenzies</h1>
        <p>
          Roll until all dice are the same. Click each dice to freeze it at it's
          current value between rolls
        </p>
      </div>
      <div className="dice-container">{diceElements}</div>
      <button className="roll-dice" onClick={diceRoll}>
        {!tenzies ? "ROLL" : "NEW GAME"}
      </button>
    </main>
  );
}
