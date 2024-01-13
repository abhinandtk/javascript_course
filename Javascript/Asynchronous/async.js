let a=newfun()

async function newfun(){
    try{
        const data=await fetch('https://jsonplaceholder.typicode.com/todos/2')
        const resdata=await data.json()
        console.log(resdata);
        return resdata
    }
    catch{
        return 12
    }
   
}
