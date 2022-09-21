addEventListener("DOMContentLoaded", (e)=>{
    //29. Una empresa que contrata personal requiere determinar la edad de las personas que solicitan trabajo,
    // pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron. Realice el código
    // que representen el algoritmo para solucionar este problema.

    // Solicita año de nacimiento y año actual
    let a=Number(prompt("¿Cuál es su año de nacimiento?: ",5))
    let ac=Number(prompt("Año actual: ",))

    // operación
    let edad=ac-a

    console.log(`La edad de la persona: ${edad}`)
})