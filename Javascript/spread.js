var obj1={
    c:1,
    d:2
}
var obj2={
    a:2,
    b:3
}

var val={...obj1,...obj2,e:3}
console.log(val);

obj3={...obj1}
obj3.c=4
console.log(obj1,obj3);

let arr=[1,2,3,4,5,6,7]
let a=Math.max(...arr)
console.log(a);