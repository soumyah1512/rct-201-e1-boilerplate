import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import Clock from "./components/Clock";
import List1 from "./components/List1";
import List2 from "./components/List2";
import useClock from "./hooks/useClock";
import useNumberList from "./hooks/useNumberList";

function App() {
  const [value,setValue] = useState(Number)
  const [value2,setValue2] = useState(Number)
  const {hours: h, minutes: m, seconds: s} = useClock()
  const list1 = [1, 2, 3]
  const {list,appendStart,popEnd,clear,reset} = useNumberList(list1)
  const list2 = [4, 5]
  const {list: l2,appendEnd: ae,popStart: ps,clear: cl,reset: rs} = useNumberList(list2)

  console.log(list)

  const handleAE = () => {
    ae(value2)
  }

  const handleAS = (e: number) => {
    appendStart(value)
  }
  
  const popE = () => {
    popEnd()
  }

  const popS = () => {
    ps()
  }

  const clr = () => {
    clear()
  }

  const rst = () => {
    reset()
  }
  return (
    <div className="App">
      <Clock currHour={h} currMinute={m} currSecond={s} label={"24 Hour Live Custom Component Clock"}/>
      <div style={{display: "flex", margin: "50px 25%", gap:'20px'}}>

      {/* List 1  initialValues [1, 2, 3] */}
      <List1 label={"List 1"} initialValues={list} appendStart={handleAS} popEnd={popE} clear={clr} reset={rst} value={value} setValue={setValue}/>
      {/* List 2  initialValues [4, 5] */}
      <List2 label={"List 2"} initialValues={l2} appendEnd={handleAE} popStart={popS} clear={cl} reset={rs} value={value2} setValue={setValue2}/>
      </div>
    </div>
  );
}

export default App;
