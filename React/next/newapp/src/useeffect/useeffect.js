import { logDOM } from "@testing-library/react";
import React, { useEffect, useState } from "react";
function Effects(){
    const [state,setState]=useState(1)
    const [value,setvalue]=useState(false)

    
// useEffect(()=>{

//     return ((value)=>{
//         if(!(state==value)){
// setState(state+1)
//         }
//         else{
//             return
//         }
//     })
// })
// console.log(state);

useEffect(()=>{
    const id=setTimeout(() => {
        setState(state+1)
    }, 2000);
    return (()=>{
        clearTimeout(id)
    })

},[value])
    const clickFun=()=>{
        setvalue((value)=>!value)
        }
        console.log(state);
   return <div><button onClick={clickFun}>Click</button></div>


}

export default Effects

