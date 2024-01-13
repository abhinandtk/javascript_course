// array1=[1,2,3,4,5]

// const value=array1.find((value,key)=>{console.log('haiiii')
//     return value>2 })

// console.log(value);

const array2=[
    {mark:30},
    {mark:22},
    {mark:45},
    {mark:54},
    {mark:10}
]
const bb=array2.reduce((total,val)=>{
    return total+val.mark
},0)
console.log(bb);

array3=[1,2,3,4,5]

let sum=0
array3.forEach((value)=>{
  sum=sum+value  
})
console.log(sum);
