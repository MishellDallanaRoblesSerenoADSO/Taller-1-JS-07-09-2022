<<<<<<< HEAD
addEventListener("DOMContentLoaded",()=>{
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
    // 24. Un jefe de obra con el dinero que tiene compra cinco juegos de llaves hexagonales cada uno por
    // $11500. Una bomba en $1168000 y tres cajas de pernos cada uno por $87000. Después de pagar le
    // sobran $91000. ¿cuánto dinero tenía?
>>>>>>> 5004982 (Ejercicio 24)

    // valores de llaves hexagonales, bomba, cajas perno y cambio 
    
<<<<<<< HEAD
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
=======
    let llaves=Number(prompt("5 llaves: ",11500*5))  
    let bomba=Number(prompt("1 bomba: ",1168000))  
    let cajas_p=Number(prompt("Valor de las llaves: ",87000*3))  
    let cambio=91000     
    let s= (llaves+bomba+cajas_p+cambio)

    console.log(`Precio de las 5 llaves: ${llaves}`)
    console.log(`Precio de la bomba: ${bomba}`)
    console.log(`Precio de las cajas perno: ${cajas_p}`)
    console.log(`El cambio es de: ${cambio}`)
    console.log(`Dinero total que tenia es: ${s}`)
>>>>>>> 5004982 (Ejercicio 24)
=======
    // 25. En el programa de cocina de “Doña Anita” han dado la receta para la preparación de bizcocho especial
    // de chocolate. Por cada 100 gramos de harina hay que añadir 10 gramos de cacao y un puñado de
    // nueces. Si quiero prepararlos con 20 gramos de chocolate. La cantidad de gramos de harina para
    // hacer el bizcocho es
=======
addEventListener("DOMContentLoaded", (e)=>{
<<<<<<< HEAD
<<<<<<< HEAD
    // 26. Un camión transporta 25 cajas de repuestos de carros. Si cada caja pesa 748 Kg ¿ Cuántos Kg
    // transporta ?
>>>>>>> 4d40ad1 (Ejercicio 26)

    // cantidad kg
    
    let cajas = prompt("Cantidad de cajas que transporta", 25); 

    // operación
    let t = cajas*748


<<<<<<< HEAD
    console.log(`La cantidad de gramos de harina que tiene que agregar es: ${t} gramos`)
>>>>>>> 0732ad0 (Ejercicio 25)
=======
    console.log(`La cantidad que transporta es de: ${t} kg`)
>>>>>>> 4d40ad1 (Ejercicio 26)
=======
    // 27. tres estudiantes reunieron tapas de gaseosas para repartirlas y venderlas al final del año. Martin toma
    // 2/3 del total. Jairo un cuarto del total, y Lorena se queda con el resto. ¿qué parte le corresponde a
    // Lorena?

    // No entendí gg
>>>>>>> b65a6a7 (El no ejercicio 27)
=======
    //28. Pinturas “La brocha gorda” requiere determinar cuánto cobrar por trabajos de pintura. Considere que
    // se cobra por m2 y realice el código que representen el algoritmo que le permita ir generando
    // presupuestos para cada cliente.

    // Cantidad y precio del m2 
    let m2=Number(prompt("¿Cuál es la cantidad de m2?: ",5))
    let precio=Number(prompt("Precio del m2: ",5))

    // operación
    let t=m2*precio

    console.log(`El valor de la pintura es: ${t}`)
>>>>>>> 5e38763 (Ejercicio 28)
})