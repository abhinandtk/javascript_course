function hello(){
    console.log('hai');
}

function news(){
    console.log('newfunction');
}
const obj={
    num:1,
    nums:2
}

export {
    hello as newname,
    news,
    obj
}