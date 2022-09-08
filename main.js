addEventListener("DOMContentLoaded",()=>{
    // 6. Escribir un programa que calcule la velocidad de un proyectil que recorre 2 Km en 5 minutos. Expresar
    // el resultado en metros/segundo. Velocidad = espacio/tiempo.
    let espacio= Number(prompt("ingrese el valor del espacio: ",2000))
    let tiempo= Number(prompt("ingrese el valor del tiempo: "))

    let velocidad=(espacio*tiempo)
    console.log(`La velocidad del proyectil es de: "${velocidad}", m/seg`)
})