import { useState } from "react";
const Counter = ()=>{
    const [count,setCount]= useState(0);
  return(
    <>
    <button onClick={()=>setCount((count)=>count+1)}>+</button>
    <h3>count is : {count}</h3>
    <button onClick={()=>setCount((count)=>count-1)}>-</button>
    </>
  )
}
export default Counter;