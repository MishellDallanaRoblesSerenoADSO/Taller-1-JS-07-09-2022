addEventListener("DOMContentLoaded",()=>{
    // 9. Escribir un programa que calcule el área y el volumen de un cilindro:
    // A  = (2 * (PI * r˄2)) + ((2 * PI * r) * h)
    // V = (PI * r2) * h
    let r= Number(prompt("Coloque el valor del radio del cilindro: ",5))
    let h= Number(prompt("Coloque el valor de la altura del cilindro: ",8))
    let resultado= Number(prompt("operacion   = (2 * (PI * r˄2)) + ((2 * PI * r) * h)", (2 * (math.PI) * r**2) + (2* (math.PI) * r) *h))
    let rvolumen= Number(prompt("operacion   = (PI * r2) * h", ((math.PI) * r*2) * h))
    console.log(`El area  del cilidndro es: ${resultado}`)
    console.log(`El volumen del cilindro es: ${rvolumen}`)
})