var objs=[
    {
        name:"abhi",
        msg:"hai1"
    },
    {
        name:"asi",
        msg:"hai2"
    },
    {
        name:"alan",
        msg:"hai3"
    },
]

function main(){
    objs.forEach(
        function(val,i){
           var bt= document.createElement('button')
           bt.innerHTML=val.name
           bt.onclick=()=>myCallback(val.msg)
           document.body.append(bt)
        }
    )
}
function myCallback(msg){
    alert(msg)
}
main()