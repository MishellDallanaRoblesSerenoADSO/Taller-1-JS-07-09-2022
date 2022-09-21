addEventListener("DOMContentLoaded",()=>{
<<<<<<< HEAD
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
=======
    // 23. Calcular la edad de una madre en el momento de dio a luz a alguno de sus hijos.
    // • Generar el algoritmo que dé como resultado el tiempo estimado para el llenado de un
    // depósito.
    // • Q=V/t, siendo Q (caudal), V (volumen) y t (tiempo).
    // • Volumen = PI *(radio^2)* H (altura del depósito)
    // • El tiempo se encuentra en minutos.
    // • Normalmente se mide el volumen en litros y el tiempo en segundos.
>>>>>>> 55a7805 (Ejercicio 23)

    // datos de caudal, altura y radio del deposito
    let c=Number(prompt("Cuál es el caudal en l/s: ",90))
    let h=Number(prompt("Altura del deposito: ",13))
    let r=Number(prompt("Radio del deposito: ",3))
    
<<<<<<< HEAD
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
=======
    // operación
    let v= (Math.PI)*(r**2)*h
    let t= v/c
    let m= t/60      


    console.log(`El tiempo en segundos que trada el deposito es de: ${t}`)
    console.log(`El tiempo que demora llenando el deposito es de: ${m}`)
>>>>>>> 55a7805 (Ejercicio 23)
})