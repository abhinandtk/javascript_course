const product=[{
    productt:"pen",
    price:20
},{
    productt:"balloon",
    price:25
}]

document.body.innerHTML=product.map((value,key)=>{
    return `<div>Product:${value.productt}</div
    <div>Price:${value.price}</div
    `;
})