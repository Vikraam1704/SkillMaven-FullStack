import React,{ useState} from 'react'
import './UseState.css'
const UseState = () => {
    const [count, setCount] = useState(0);
    const handleButtonClicked = ()=>{
        setCount(count+1);
    }
  return (
    <div>
        <h1 className="heading">{count}</h1>
        <button onClick={handleButtonClicked}>Increment</button>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
    </div>
  )
}
export default UseState