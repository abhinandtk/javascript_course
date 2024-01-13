let a;
try{
 a=getvalue1()
 first()

}catch(e){
     a=0
     console.log(e);
}
finally{
    console.log('hello');
}

function getvalue1(){
    // lsjfksl
    return 1;
}
console.log(a);
function first(){
// throw 'error of mine'
throw new Error('new error')
}
// first()