import React, {useState, createContext} from "react";
import Counter from "./components/Counter";


export const CounterContext = createContext();

export function CounterProvider(props){

    const [count, setCount] = useState(8)

    return(<CounterContext.Provider value={[count, setCount]}>
        {props.children}
    </CounterContext.Provider>)
}
