
import React, { useState } from "react";





function Calculator() {
    const[Pennies, setPennies] = useState(0);
    const[PennyRolls, setPennyRolls] = useState(0);
    const[Nickels, setNickles] = useState(0);
    const[NickelRolls, setNickleRolls] = useState(0);
    const[Dimes, setDimes] = useState(0);
    const[DimeRolls, setDimeRolls] = useState(0);
    const[Quarters, setQuarters] = useState(0);
    const[QuarterRolls, setQuarterRolls] = useState(0);
    const[Ones, setOnes] = useState(0);
    const[Fives, setFives] = useState(0);
    const[Tens, setTens] = useState(0);
    const[Twenties, setTwenties] = useState(0);
    const[Fifties, setFifties] = useState(0);
    const[Hundreds, setHundreds] = useState(0);


    const calculateTotal = () => {
        const totalPennies = Pennies * 0.01;
        const totalNickles = Nickels * 0.05;
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

    // I always wanted to be as close to $2.00  in pennies $6.00 dollars in nickels $12 dollars in dimes $20 dollars in quarters..
    // without going over... 75$ in ones,  $55 in fives $50 in tens and $80 in twenties

      const calculateChange = () => {
      const PennyRollAmount = PennyRolls * 50;
      const TotalPennies = parseInt(Pennies) + parseInt(PennyRollAmount)
      const NickleRollAmount = NickelRolls * 20
      const TotalNickels = parseInt(NickleRollAmount) + parseInt(Nickels)
      const DimeRollAmount = DimeRolls * 50
      const TotalDimes = parseInt(Dimes) + parseInt(DimeRollAmount)
      const QuarterRollAmount = QuarterRolls * 40
      const TotalQuarters = parseInt(Quarters) + parseInt(QuarterRolls)
      const TotalOnes = parseInt(Ones)
      const TotalFives = parseInt(Fives * 5)
      const TotalTens = parseInt(Tens * 10)
      const TotalTwenties = parseInt(Twenties * 20)



      const NeededPennies = 200 - TotalPennies;


      if (PennyRollAmount >= 0 || Pennies >= 0) {
        const NeededPennyRolls = Math.floor(NeededPennies / 50);

         if (NeededPennyRolls > 0) {
           alert(`Get ${NeededPennyRolls} roll(s) of pennies`);
         }
       }

       const NeededNickles = 120 - TotalNickels;

       if (NickleRollAmount >= 0 || Nickels >= 0) {

         const NeededNickleRolls = Math.floor(NeededNickles / 40);

         if (NeededNickleRolls > 0) {
           alert(`Get ${NeededNickleRolls} roll(s) of Nickles`)
         }
       }

       const NeededDimes = 120 - TotalDimes;

       if (DimeRollAmount >= 0 || Dimes >= 0) {

         const NeededDimeRolls = Math.floor(NeededDimes / 50);

         if (NeededDimeRolls > 0) {
           alert(`Get ${NeededDimeRolls} roll(s) of Dimes`)
         }
       }

       const NeededQuarters = 80 - TotalQuarters;

       if (QuarterRollAmount >= 0 || Quarters >= 0) {

         const NeededQuarterRolls = Math.floor(NeededQuarters / 40);

         if (NeededQuarterRolls >  0){
          alert(`Get ${NeededQuarterRolls} roll(s) of Quarters`)

         }
       }

       const NeededOnes = 75 - TotalOnes;

       if (Ones < 75) {
         const additionalOnesNeeded = Math.ceil(NeededOnes / 1); // Calculate how many additional ones are needed
         alert(`Get ${additionalOnesNeeded} Dollar Bill(s)`);
       }

       const NeededFives = 55 - TotalFives;

       if (Fives < 55) {
         const additionalFivesNeeded = Math.ceil(NeededFives / 5);
         alert(`Get ${additionalFivesNeeded} Five Dollar Bill(s)`)
       }

       const NeededTens = 50 - TotalTens;

       if (Tens < 50) {
         const additionalTensNeeded = Math.ceil(NeededTens / 10);
         alert(`Get ${additionalTensNeeded} Ten Dollar Bill(s)`)
       }

       const NeededTwenties = 80 - TotalTwenties;

       if (Twenties < 80) {
         const additionalTwentiesNeeded = Math.ceil(NeededTwenties / 20);
         alert(`Get ${additionalTwentiesNeeded} Twenty Dollar Bill(s)`)
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
          value={Nickels}
          onChange={(e) => setNickles(e.target.value)}
        />
      </label>
      <label>
        NickelsRolls:
        <input
          type="number"
          value={NickelRolls}
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
        Dimes Rolls:
        <input
          type="number"
          value={DimeRolls}
          onChange={(e) => setDimeRolls(e.target.value)}
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
        Quarters Rolls:
        <input
          type="number"
          value={QuarterRolls}
          onChange={(e) => setQuarterRolls(e.target.value)}
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
