addEventListener("DOMContentLoaded",()=>{
    //13. Realice un algoritmo que a partir de proporcionarle la velocidad de un automóvil expresada en
    // kilómetros por hora, proporcione la velocidad en metros por segundos.


    let cm= 355
    let iva=0.20

    let velocidad= Number(prompt("Coloque los km/h: ",))
    let resultado=(velocidad *1000/3600)
    console.log(`Velocidad en m/s: ${resultado}`)
})