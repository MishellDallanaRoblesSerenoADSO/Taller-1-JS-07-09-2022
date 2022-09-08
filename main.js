addEventListener("DOMContentLoaded",()=>{
    // 10. Escribir un algoritmo que permita obtener las raíces reales de la ecuación de segundo grado: A * x2 +
    // b * x + c, siendo X un valor constante.

    let a= Number(prompt("Ingrese el valor de a: ",8))
    let b= Number(prompt("Ingrese el valor de b: ",8))
    let c= Number(prompt("Ingrese el valor de c: ",8))
    let x= Number(prompt("coloque el valor de x: ",9))

    let resultado= ((a*x)**2 + b* x *c)
    console.log(`Las raices de la ecuacion es: ${resultado}`)
})