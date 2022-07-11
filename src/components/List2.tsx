import React from "react";

type List2Props = {
  // TODO
  label: string;
  initialValues: string;
  appendEnd: Function;
  popStart: Function;
  clear: Function;
  reset: Function;
  value: number;
  setValue: Function;
};
const List2 = (props: List2Props) => {
  return (
    <div data-testid="list2">
      <h3 data-testid="list2-label">{/* Label */}{props.label}</h3>

      {/* Iterate List and wrap the element div below inside */}
      <div data-testid="list2-element">{/* Each element in a list */}{props.initialValues}</div>

      <input onChange={(e)=>props.setValue(Number(e.target.value))} data-testid="list2-input" />
      <button onClick={()=>props.appendEnd(props.value)} data-testid="list2-btn-append-end">
        {/* Button to append new number to the end of the list */}
        Append End
      </button>
      <button onClick={()=>props.popStart()} data-testid="list2-btn-pop-start">
        {/* Button to  pop first element of the list */}
        Pop Start
      </button>
      <button onClick={()=>props.clear()} data-testid="list2-btn-clear">
        {/* Button to  clear the list */}
        Clear
      </button>
      <button onClick={()=>props.reset()} data-testid="list2-btn-reset">
        {/* Button to  reset the list to initialValue */}
        Reset
      </button>
    </div>
  );
};

export default List2;
