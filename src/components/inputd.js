import { useState } from "react";
import { ADD_TO_BOX } from './actionConstants'

const BtnText = "Shoot";

function Inputd({actionDispacher, count}) {
    const [value, setValue] = useState("");
    const MoveToBox = () => {
        actionDispacher({type: ADD_TO_BOX, payload: value})
        setValue(count)
    };

    return (
      <div className="box">
        <input 
              data-testid="shootinput"
              type="number" 
              min={1} 
              max={count} 
              value={value} 
              onChange={(e) => setValue(e.currentTarget.value)}></input>
        <button 
              disabled={value === "" || count === 0} 
              className="shootBtn" 
              onClick={() => MoveToBox()}>{BtnText}</button>
      </div>
    );
}

export default Inputd

        