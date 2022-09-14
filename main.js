addEventListener("DOMContentLoaded",()=>{
    // 16. Elaborar un algoritmo para calcular el promedio final de la materia de algoritmos. Dicha calificación se
    // compone de los siguientes porcentajes:
    // • 55% del promedio final de sus calificaciones de los tres(3) parciales.
    // • 30% de la calificación examen final y
    // • 15% de la calificación trabajo final.


    // Notas a evaluar
    let par1=Number(prompt("Coloque la nota del parcial 1: ",6.5))
    let par2=Number(prompt("Coloque la nota del parcial 2: ",3))
    let par3=Number(prompt("Coloque la nota del parcial 3: ",4.6))
    let ef=Number(prompt("Coloque la nota del examen final: ",9))
    let tf=Number(prompt("Coloque la nota del trabajo final: ",7))
    
    //promedio de los parciales
    let nota= (par1 + par2 + par3)/3  
    // porcentajes de cada nota
    let porcentajes= Number(prompt("", (nota*0.55), (ef*0.30), (tf*0.15) ))

    // suma de los porcentajes
    let suma= (nota+ef+tf)/3
    console.log(`La nota final con los porcentajes aplicados es: ${suma}`)
})