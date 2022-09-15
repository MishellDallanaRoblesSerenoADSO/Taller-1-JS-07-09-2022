addEventListener("DOMContentLoaded",()=>{
    // 19. Un estudiante realiza cuatro exámenes. Realizar el pseudocódigo que representen el algoritmo
    // correspondiente para obtener el promedio de las calificaciones obtenidas. las calificaciones van 1 a 5
    // puntos.

    // Ingreso de notas de los 4 examenes
    let e1=Number(prompt("Nota del examen 1: ",5))
    let e2=Number(prompt("Nota del examen 2: ",3))
    let e3=Number(prompt("Nota del examen 3: ",3))
    let e4=Number(prompt("Nota del examen 4: ",4))
    
    // Promedio
    let nota= (e1+e2+e3+e4)/4 
    if (nota<2.5){
        console.log(`no aprobo`)
    }

    if (nota>4.5){
        console.log(`Aprobo`)
    }

    console.log(`El promedio de las notas es: ${nota}`)
})