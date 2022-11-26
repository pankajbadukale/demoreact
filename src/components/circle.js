import { RM_FROM_BOX } from "./actionConstants";

function Circles({data, onclickaction}) {
  const removeThisOne = (dObj) => {
    if(onclickaction !== undefined) {
      onclickaction({type: RM_FROM_BOX, payload: dObj})
    }
  };  
  
  return (
      <div className="circles">
        {data.map((c, ind) => {
            return (<div 
                        data-testid="cir-box"
                        onClick={() => removeThisOne(c)} style={{backgroundColor: c.color}} 
                        className="onecircle" 
                        key={ind}>
                    </div>)
        })}
      </div>
    );
  }
  
  export default Circles;
  