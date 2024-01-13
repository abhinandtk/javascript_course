import { useDispatch, useSelector } from "react-redux"
// import { increment,decrement } from "./Redux/store"
import { increment,decrement } from "./Reduxtoolkit/slice"
import { thunkfun } from "./Reduxtoolkit/Asyncthunk"
import { useEffect } from "react"

function Newtest(){

    const value=useSelector((value)=>{
        return value
    })
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(thunkfun())

    },[])
    const newval=useSelector((value)=>{
      return  value.datavalue

    })
console.log(value,'valueee');


return <div>
    <button onClick={()=>dispatch(increment())}>Increment</button>
<label>{value.value}</label>
<button onClick={()=>dispatch(decrement())}>Decrement</button>
</div>

}

export default Newtest