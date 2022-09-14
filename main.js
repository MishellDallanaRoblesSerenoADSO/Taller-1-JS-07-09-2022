addEventListener("DOMContentLoaded",()=>{
    // Programa que muestre el pago de una llamada telefónica sabiendo que cada minuto cuesta $355
    // pesos y un IVA de 20%

    let cm= 355
    let iva=0.20

    let min= Number(prompt("Inserte los minutos usados: ",3))
    let val=(cm*min)
    let r= (val*iva)
    let resultado=(val + r)
    console.log(`El pago de la llamada telefonica es: ${resultado}`)
})