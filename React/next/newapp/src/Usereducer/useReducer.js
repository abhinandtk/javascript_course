import React from "react"
function UseReducer(state,action){
if(action.type=="increase"){
    return {
        ...state,value:state.value+action.payload
    }
}
}
export default UseReducer