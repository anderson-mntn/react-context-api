import React, {useContext} from "react";
import { CounterContext } from "../CounterContext";

function Header(props){
    const [count, setCount] = useContext(CounterContext)
    return(<div className="c-header">
        <h3>Counter:</h3>
        <div>{count}</div>
    </div>)
}

export default Header;