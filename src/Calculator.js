
import React, { useState } from "react";





function Calculator() {
    const[Pennies, setPennies] = useState(0);
    const[PennyRolls, setPennyRolls] = useState(0);
    const[Nickles, setNickles] = useState(0);
    const[NickleRolls, setNickleRolls] = useState(0);
    const[Dimes, setDimes] = useState(0);
    const[Quarters, setQuarters] = useState(0);
    const[Ones, setOnes] = useState(0);
    const[Fives, setFives] = useState(0);
    const[Tens, setTens] = useState(0);
    const[Twenties, setTwenties] = useState(0);
    const[Fifties, setFifties] = useState(0);
    const[Hundreds, setHundreds] = useState(0);


    const calculateTotal = () => {
        const totalPennies = Pennies * 0.01;
        const totalNickles = Nickles * 0.05;
        const totalDimes = Dimes * 0.1;
        const totalQuarters = Quarters * 0.25;
        const totalOnes = Ones * 1;
        const totalFives = Fives * 5;
        const totalTens = Tens * 10;
        const totalTwenties = Twenties * 20;
        const totalFifties = Fifties * 50;
        const totalHundreds = Hundreds * 100;

        const totalValue =
            totalPennies +
            totalNickles +
            totalDimes +
            totalQuarters +
            totalOnes +
            totalFives +
            totalTens +
            totalTwenties +
            totalFifties +
            totalHundreds;
        return totalValue.toFixed(2);
    };

    const calculateChange = () => {
      const PennyRollAmount = PennyRolls * 50;
      const TotalPennies = parseInt(Pennies) + parseInt(PennyRollAmount)
      const NickleRollAmount = NickleRolls * 20
      const TotalNickles = parseInt(NickleRollAmount) + parseInt(Nickles)


      const NeededPennies = 200 - TotalPennies;


      if (PennyRollAmount > 0 || Pennies > 0) {
        const NeededPennyRolls = Math.floor(NeededPennies / 50);

        if (NeededPennyRolls > 0) {
          alert(`Get ${NeededPennyRolls} rolls of pennies`);
        }
      }

      const NeededNickles = 120 - TotalNickles;

      if (NickleRollAmount > 0 || Nickles > 0) {
        alert(NeededNickles)
        const NeededNickleRolls = Math.floor(NeededNickles / 40);

        if (NeededNickleRolls > 0) {
          alert(`Get ${NeededNickleRolls} rolls of Nickles`)
        }
      }
    };





    return(
        <div>
      <label>
        Pennies:
        <input
          type="number"
          value={Pennies}
          onChange={(e) => setPennies(e.target.value)}
        />
        </label>
        <label>
        Penny Rolls:
        <input
          type="number"
          value={PennyRolls}
          onChange={(e) => setPennyRolls(e.target.value)}
        />
      </label>
      <label>
        Nickels:
        <input
          type="number"
          value={Nickles}
          onChange={(e) => setNickles(e.target.value)}
        />
      </label>
      <label>
        NickelsRolls:
        <input
          type="number"
          value={NickleRolls}
          onChange={(e) => setNickleRolls(e.target.value)}
        />
      </label>
      <label>
        Dimes:
        <input
          type="number"
          value={Dimes}
          onChange={(e) => setDimes(e.target.value)}
        />
      </label>
      <label>
        Quarters:
        <input
          type="number"
          value={Quarters}
          onChange={(e) => setQuarters(e.target.value)}
        />
      </label>
      <label>
        Ones:
        <input
          type="number"
          value={Ones}
          onChange={(e) => setOnes(e.target.value)}
        />
      </label>
      <label>
        Fives:
        <input
          type="number"
          value={Fives}
          onChange={(e) => setFives(e.target.value)}
        />
      </label>
      <label>
        Tens:
        <input
          type="number"
          value={Tens}
          onChange={(e) => setTens(e.target.value)}
        />
      </label>
      <label>
        Twenties:
        <input
          type="number"
          value={Twenties}
          onChange={(e) => setTwenties(e.target.value)}
        />
      </label>
      <label>
        Fifties:
        <input
          type="number"
          value={Fifties}
          onChange={(e) => setFifties(e.target.value)}
        />
      </label>
      <label>
        Hundreds:
        <input
          type="number"
          value={Hundreds}
          onChange={(e) => setHundreds(e.target.value)}
        />
      </label>
      <button onClick={() => alert(`Total Value: $${calculateTotal()}`)}>
      Calculate total
      </button>
      <button onClick={() => alert(`Total Value: $${calculateChange()}`)}>
      Calculate Change
      </button>
    </div>
    )
}



export default Calculator;
