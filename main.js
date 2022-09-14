addEventListener("DOMContentLoaded",()=>{
    // 14. Una farmacia aplica al precio de los remedios el 10% de descuento, hacer un programa que
    // ingresando el costo de los medicamentos calcules el descuento y el precio final.en metros por segundos.

    // Precio del remedio y el valor del descuento que se le aplica
    let remedio=Number(prompt("Coloque el valor del remedio: "))
    let costo= (remedio * 0.10)

    console.log(`Descuento del remedio: ${costo}`)
    // Valor total 
    let valort=(remedio-costo)
    console.log(`El valor total es: ${valort}`)
})