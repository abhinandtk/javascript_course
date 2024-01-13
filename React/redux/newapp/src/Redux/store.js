// import { createStore,combineReducers } from 'redux';
// import { applyMiddleware } from 'redux';
// import Middleware from '../middleware';
// import logger from 'redux-logger';


// const Reducer =combineReducers(
//     {value:Firstreducer}
// )

// function Firstreducer(state = 0, action) {
//   if (action.type === 'increment') {
//     return state + 1
 
//   } else if (action.type === 'decrement') {
//     return state - 1

//   } else {
//     return state;
//   }
// }
// function increment(){
//     return {
//         type:"increment"
//     }
// }
// function decrement(){
//     return {
//         type:"decrement"
//     }
// }

// // const store = createStore(Reducer,applyMiddleware(Middleware));
// const store = createStore(Reducer,applyMiddleware(logger));

// export default store;
// export {
//     increment,decrement
// }
