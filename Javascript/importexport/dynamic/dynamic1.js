
async function hai(){
    // import ('./dynamic.js').then(
    //     (res)=>{
    //         res.hello()
    //     }
    // )
    const data=await import('./dynamic.js')
    data.hello()

}

let btn=document.createElement('button')
document.body.appendChild(btn)
btn.innerHTML="Click"
btn.onclick=hai
