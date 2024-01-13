// let a=[1,2,3,4,5]

// function myFunction(arg,index,array){
//     console.log(arg);
//     console.log(index);
//     console.log(array);
// }

// a.forEach(myFunction)
// a.forEach(item=>console.log(item))
// const name=()=>({a:2,b:2})
// const val=name()
// console.log(val.a);

function getname(){
    console.log(this.names)
};

const obj1={
    names:"abhi",
    two:getname
}
const obj2={
    names:"assd",
    two:getname
}
obj1.two()
obj2.two()