addEventListener("DOMContentLoaded",()=>{
    // 20. Un vendedor recibe un sueldo base más el 10% de comisión sobre sus ventas. Si en un mes
    // cualquiera hace tres ventas por valores: v1, v2 y v3, ¿cuánto recibirá por comisión? y ¿cuánto en total
    // sueldo del vendedor?.

    // Valor de las 3 ventas
    let v1=Number(prompt("Valor de la venta 1: ",54))
    let v2=Number(prompt("Valor de la venta 2: ",62))
    let v3=Number(prompt("Valor de la venta 3: ",50))
    
    // Comisión de las ventas
    let ventas=(v1+v2+v3)
    let comision=(ventas*0.10) 

    console.log(`Valor de las ventas: ${ventas}`)
    console.log(`Valor de comision: ${comision}`)

})