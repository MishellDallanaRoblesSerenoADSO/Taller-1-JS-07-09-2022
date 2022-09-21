addEventListener("DOMContentLoaded",()=>{
    // 23. Calcular la edad de una madre en el momento de dio a luz a alguno de sus hijos.
    // • Generar el algoritmo que dé como resultado el tiempo estimado para el llenado de un
    // depósito.
    // • Q=V/t, siendo Q (caudal), V (volumen) y t (tiempo).
    // • Volumen = PI *(radio^2)* H (altura del depósito)
    // • El tiempo se encuentra en minutos.
    // • Normalmente se mide el volumen en litros y el tiempo en segundos.

    // datos de caudal, altura y radio del deposito
    let c=Number(prompt("Cuál es el caudal en l/s: ",90))
    let h=Number(prompt("Altura del deposito: ",13))
    let r=Number(prompt("Radio del deposito: ",3))
    
    // operación
    let v= (Math.PI)*(r**2)*h
    let t= v/c
    let m= t/60      


    console.log(`El tiempo en segundos que trada el deposito es de: ${t}`)
    console.log(`El tiempo que demora llenando el deposito es de: ${m}`)
})