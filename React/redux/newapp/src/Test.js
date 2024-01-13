// import { createStore} from 'redux'
// function Test(){


//     //Redux in javascript method
//     const initialState={
//         value:0
//     }

//     function Reducer(state=initialState,action){
//         if(action.type=="increment"){
//             return {
//                 ...state,value:state.value+1
//             }
//         }
//         else if(action.type=="decrement"){
//             return {
//                 ...state,value:state.value-1            }

//         }
//         else{
//             return state
//         }

//     }

// const store=createStore(Reducer)
// const value=store.getState()
// store.subscribe(()=>{
//     console.log(store.getState());
//    const val= store.getState()
//    document.getElementById('label').innerHTML=val.value
// })
// console.log(value);

// return <div>
// <button onClick={()=>store.dispatch({
//     type:'increment'
// })}>
//   Increment
// </button >
// <label id='label'>{value.value}</label>
// <button onClick={()=>store.dispatch({
//     type:'decrement'
// })}>Decrement</button>
// </div>


// }

// export default Test