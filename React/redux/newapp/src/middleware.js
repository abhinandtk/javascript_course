function Middleware({dispatch,getState}){
    return (next)=>{
        return(action)=>{
            console.log('prevstate',getState());
            console.log('action',action);
            next(action)
            console.log('next stae',getState());
        }
    }

}
export default Middleware