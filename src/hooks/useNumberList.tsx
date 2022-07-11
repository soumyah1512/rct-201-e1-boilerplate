import { useState } from "react";

const useNumberList = (initialArray: number[]) => {
  // TODO
  // refer readme.md for what to return

  const [na,setNA] = useState(initialArray)

  const [list,setList] = useState(na.join(" "));




  const appendEnd = (add: number) => {
    var temp = [...na,add]
    setNA(temp)
    setList(temp.join(" "))
    return
  }

  const appendStart = (add: number) => {
    // console.log("s");
    var temp = [add,...na]
    setNA(temp)
    setList(temp.join(" "))
    return
  }

  const popEnd = () => {
    console.log("s");
    
    var temp = [...na]
    temp.pop()
    setNA(temp)
    setList(temp.join(" "))
    return
  }

  const popStart = () => {
    var temp = [...na]
    temp.shift()
    setNA(temp)
    setList(temp.join(" "))
    return
  }

  const clear = () => {
    setNA([])
    setList(" ")
    return
  }

  const reset = () => {
    const temp = [...initialArray]
    setNA(temp)
    setList(temp.join(" "))
    return
  }

  return {list,appendStart,appendEnd,popStart,popEnd,clear,reset}
};

export default useNumberList;
