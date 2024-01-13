// function myFunction (){
// console.log("hello1");
// }
// const fn=function(){
//     console.log("hello2");
// }
// myFunction()
// fn()

// const arf=()=>[1,2,3,4];
// const ams=()=>({one:"abhi",two:"avvi"})

// const val=arf()
// const val2=ams()
// console.log(val);
// console.log(val2);
const obj={
    a:1,
    b:2,
    c:function(){
        return this.a
    }
}
const obj2={
    a:1,
    b:2,
    c:()=>this
}

// const ne=obj.c()
// ne2=obj2.c()
// console.log(ne);
// console.log(ne2);

let newobj={
    a:1,
    b:2,
    c:function(){
console.log(this);
    }
}
// const newone=newobj.c
// newone.call(newobj)
newobj= newobj.c.bind(newobj)
var thef=newobj
thef()
//or we can use the apply 