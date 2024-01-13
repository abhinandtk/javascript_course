class Button{
    constructor(name){
        this.button=document.createElement('button')
        console.log(this.button);
        this.button.innerHTML=name
        document.body.appendChild(this.button)
    }
    set width(width){
        this.button.style.width=width+'px'
    }
    set height(height){
        this.button.style.height=height+'px'
    }
    get width(){
       return parseInt(this.button.style.width)
    }
    get height(){
      return  parseInt(this.button.style.height)
    }
}
let button1=new Button('Click Me')
console.log(button1);
button1.width=100
button1.height=100
console.log(button1.height,button1.width);