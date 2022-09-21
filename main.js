addEventListener("DOMContentLoaded",()=>{
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

    // Valores de los puntos
    let x1=Number(prompt("Coloca la x1: ",7))
    let x2=Number(prompt("  Coloca la ordenada 1: ",8))
    let y1=Number(prompt("Coloca la y1: ",4))
    let y2=Number(prompt("  Coloca la ordenada 2: ",6))
    
    // operación
    let r=Number((x2-x1)**2+(y2-y1)**2)
    console.log(`La distancia de los puntos es de: ${r}`)
>>>>>>> 3b61eaa (Ejercicio 21)
})