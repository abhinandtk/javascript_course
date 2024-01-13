// array = [{
//     fa: "abhi",
//     method: {
//         val: "hai",
//         msg: "hello"
//     }
// }, 2, 3, 4, 5]

// const [ {fa, method: { val },sav=1 },two,three] = array

// console.log(fa, val,two,three,sav);

const namee={
    a:1,
    b:2,
    c:3,
    d:4
}
const {a,...others}=namee
console.log(others);

const objj={
    d:1,
    e:2,
    status:undefined
}

const {d,e,status=false}=objj 


obj4={
    ss:1,
    dd:2
}

function myFunction({ss,dd}){
    console.log(ss,dd);
}

myFunction(obj4)