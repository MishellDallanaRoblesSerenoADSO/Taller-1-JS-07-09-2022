addEventListener("DOMContentLoaded", (e)=>{
    //28. Pinturas “La brocha gorda” requiere determinar cuánto cobrar por trabajos de pintura. Considere que
    // se cobra por m2 y realice el código que representen el algoritmo que le permita ir generando
    // presupuestos para cada cliente.

    // Cantidad y precio del m2 
    let m2=Number(prompt("¿Cuál es la cantidad de m2?: ",5))
    let precio=Number(prompt("Precio del m2: ",5))

    // operación
    let t=m2*precio

    console.log(`El valor de la pintura es: ${t}`)
})