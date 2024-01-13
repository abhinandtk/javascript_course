import React, { useReducer } from "react";
import UseReducer from "./Usereducer/useReducer";

function Reduce(){
    const initialState={
        value:1
    }
const [state,dispatch]=useReducer(UseReducer,initialState)
console.log(state);

    return <div>
        <button onClick={()=>dispatch({
            type:"increase",
            payload:1
        })}>Click to increase</button>
        <label></label>
    </div>
}

export default Reduce