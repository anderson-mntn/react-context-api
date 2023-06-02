import React, { useState } from "react";

function Counter(props){

    const [count, setCount] = useState(5)

    return(<div>
        <div>{count}</div>
        <button onClick={()=>{setCount(prev=> prev - 1)}}>-</button>
        <button onClick={()=>{setCount(prev=> prev + 1)}}>+</button>

    </div>)
}

export default Counter;