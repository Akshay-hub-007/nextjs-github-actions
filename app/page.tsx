"use client"
import { useState } from "react";



export default  function Home() {
 
  const [count,setCount] = useState(0);

  return <>
    <div>
      <h3>Counter</h3>
      <h1>{count}</h1>
      <button className="w-12 h-23 bg-emerald-500" onClick={()=>setCount(cnt => cnt+1)}>+</button>
       <button className="w-12 h-23 bg-amber-800" onClick={()=>setCount(cnt => cnt-1)}>-</button>
    </div>
  
  </>;
}