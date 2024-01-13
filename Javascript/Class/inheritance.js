class Button{
    constructor(name){
         this.button=document.createElement('button')
        this.button.innerHTML=name
        document.body.appendChild(this.button)

    }
//  onClick(fn){
//     this.button.onclick=function(){
//         console.log(this);
//         this.button.style.background="blue"
//      }.bind(this)

//  }
}

class Greenbutton extends Button{
    onClick(fn){
        console.log(this);
     this.button.onclick=function(){
        console.log(this);
        this.button.style.background="green"
     }.bind(this)
    }
}

let button1=new Greenbutton('button1')
button1.onClick(function(){
console.log('clicked');
})
