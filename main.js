addEventListener("DOMContentLoaded",()=>{
    // Escribir un programa que calcule el volumen de un elipsoide 
    // V = (4/3) * PI * a * b *c
    let v=(4/3) * (Math.PI)
    let a= Number(prompt("Ingrese el valor de a: ",8))
    let b= Number(prompt("Ingrese el valor de b: ",8))
    let c= Number(prompt("coloque el valor de c: ",9))

    let volumen= (v*a*b*c)
    console.log(`El volumen de un eplisoide es: ${volumen}`)
})