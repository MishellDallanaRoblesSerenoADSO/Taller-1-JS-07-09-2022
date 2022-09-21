addEventListener("DOMContentLoaded",()=>{
    // 24. Un jefe de obra con el dinero que tiene compra cinco juegos de llaves hexagonales cada uno por
    // $11500. Una bomba en $1168000 y tres cajas de pernos cada uno por $87000. Después de pagar le
    // sobran $91000. ¿cuánto dinero tenía?

    // valores de llaves hexagonales, bomba, cajas perno y cambio 
    
    let llaves=Number(prompt("5 llaves: ",11500*5))  
    let bomba=Number(prompt("1 bomba: ",1168000))  
    let cajas_p=Number(prompt("Valor de las llaves: ",87000*3))  
    let cambio=91000     
    let s= (llaves+bomba+cajas_p+cambio)

    console.log(`Precio de las 5 llaves: ${llaves}`)
    console.log(`Precio de la bomba: ${bomba}`)
    console.log(`Precio de las cajas perno: ${cajas_p}`)
    console.log(`El cambio es de: ${cambio}`)
    console.log(`Dinero total que tenia es: ${s}`)
})