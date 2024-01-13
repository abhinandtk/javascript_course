import React, { useContext } from "react"
import MyContext from "."
const memo=React.memo(Innercom)
function Innercom(newval){
    console.log(newval);
    const val=useContext(MyContext)
console.log(val,'valllllue');
    return <div>
        <h2>This is innercomponent</h2>
    </div>
}

export default memo