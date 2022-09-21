addEventListener("DOMContentLoaded",()=>{
    // //22. Pablo compro 5 productos los dos primeros con un 5% de descuento y los 2 últimos con un 2% de
    // descuento, realice un algoritmo que indique cuanto fue el valor a pagar por cada producto y el total
    // de la compra.

    // Costo de cada producto
    let p1=Number(prompt("Valor primer producto: ",69))
    let p2=Number(prompt("Valor segundo producto: ",45))
    let p3=Number(prompt("Valor tercer producto: ",69))
    let p4=Number(prompt("Valor cuarto producto: ",69))
    let p5=Number(prompt("Valor quinto producto: ",69))
    
    // operación del descuento y precio total
    let d1= p1-(p1*5/100)
    let d2= p1-(p2*5/100)
    let d3= p1-(p3*5/100)
    let d4= p1-(p4*5/100)
    let d5= p1-(p5*5/100)
      


    console.log(`El valor del producto es: ${d1}`)
    console.log(`El valor del producto es: ${d2}`)
    console.log(`El valor del producto es: ${d3}`)
    console.log(`El valor del producto es: ${d4}`)
    console.log(`El valor del producto es: ${d5}`)
})