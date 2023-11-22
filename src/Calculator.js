import React, { useState } from "react";



function Calculator() {
    const[Ones, SetOnes] = useState(0);
    const[Fives, SetFives] = useState(0);
    const[Tens, SetTens] = useState(0);
    const[Twenties, SetTwenties] = useState(0);
    return(
        <div>
            <input
            type="number"
            placeholder="Ones"
            value={Ones}
            onChange={(e) => SetOnes(e.target.value)}
            />
        </div>
    )
}


export default Calculator;
