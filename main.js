addEventListener("DOMContentLoaded",()=>{
<<<<<<< HEAD
<<<<<<< HEAD
    // 1. Escribir un programa que sume, reste, multiplique y divida dos números

    let num1= Number(prompt("ingrese el numero 1", 2));
    let num2= Number(prompt("ingrese el numero 2", 2)); 
    console.log(`la suma es ${num1} + ${num2} = ${num1 + num2}`);
    console.log(`la resta es ${num1} - ${num2} = ${num1 - num2}`);
    console.log(`la multiplicacion es ${num1} * ${num2} = ${num1 * num2}`);
    console.log(`la division es ${num1} / ${num2} = ${num1 / num2}`);
=======
    //21. Se requiere calcular la distancia entre dos puntos, realizar el código que permita hallar la solución,
    // por favor utilizar funciones matemáticas de Python para ello
    // d = rc((x2-x1)^2 + (y2-y1)^2)
=======
    // //22. Pablo compro 5 productos los dos primeros con un 5% de descuento y los 2 últimos con un 2% de
    // descuento, realice un algoritmo que indique cuanto fue el valor a pagar por cada producto y el total
    // de la compra.
>>>>>>> 1c926fb (Ejercicio 22)

    // Costo de cada producto
    let p1=Number(prompt("Valor primer producto: ",69))
    let p2=Number(prompt("Valor segundo producto: ",45))
    let p3=Number(prompt("Valor tercer producto: ",69))
    let p4=Number(prompt("Valor cuarto producto: ",69))
    let p5=Number(prompt("Valor quinto producto: ",69))
    
<<<<<<< HEAD
    // operación
    let r=Number((x2-x1)**2+(y2-y1)**2)
    console.log(`La distancia de los puntos es de: ${r}`)
>>>>>>> 3b61eaa (Ejercicio 21)
=======
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
>>>>>>> 1c926fb (Ejercicio 22)
})