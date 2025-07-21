import React,{ useEffect, useState} from 'react'
import './UseState.css'
const UseEffect = () => {
    const [count, setCount] = useState(0);
    const [value,setValue] = useState(0)
    const handleButtonClicked = ()=>{
        setCount(count+1);
    }

    useEffect(()=>{
        console.log("UseEffect is Running")
    })
  return (
    <div>
        <h1 className="heading">{count}</h1>
        <button onClick={handleButtonClicked}>Increment</button>
        <button onClick={()=>{setCount(count-1)}}>Decrement</button>
        <button onClick={()=>setValue(value+1)}>value : {value}</button>
    </div>
  )
}
export default UseEffect