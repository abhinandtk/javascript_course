function calc(...arr){
   const value= arr.reduce((total,value)=>{
       total=total+value
       return total
    },0)
    return value
}

const arrayy=[1,2,3,4,5,6,7,8,9,10,11]
const answer=calc(...arrayy)
console.log(answer,'answer');
