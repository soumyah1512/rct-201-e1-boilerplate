import React, { useState } from "react";
import useNumberList from "../hooks/useNumberList";

type List1Props = {
  // TODO
  label: string;
  initialValues: string;
  appendStart: Function;
  popEnd: Function;
  clear: Function;
  reset: Function;
  value: number;
  setValue: Function;

};
const List1 = (props: List1Props) => {
  // const [value,setValue] = useState(Number)
  
  return (
    <div data-testid="list1">
      <h3 data-testid="list1-label">{/* Label */}{props.label}</h3>
      {/* Iterate List and wrap the element div below inside */}
      <div data-testid="list1-element">{/* Each element in a list */}{props.initialValues}</div>
      

      
      <input onChange={(e)=>props.setValue(Number(e.target.value))} data-testid="list1-input" />
      <button onClick={()=>props.appendStart(props.value)} data-testid="list1-btn-append-start">
        {/* Append to start of list btn */}
        Append Start
      </button>
      <button onClick={()=>props.popEnd()} data-testid="list1-btn-pop-end">
        {/* po last element btn */}
        Pop End
      </button>
      <button onClick={()=>props.clear()} data-testid="list1-btn-clear">
        {/* clear list and set empty button */}
        Clear
      </button>
      <button onClick={()=>props.reset()} data-testid="list1-btn-reset">
        {/* Reset list to default value btn */}
        Reset
      </button>
    </div>
  );
};

export default List1;
