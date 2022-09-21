addEventListener("DOMContentLoaded",()=>{
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
})