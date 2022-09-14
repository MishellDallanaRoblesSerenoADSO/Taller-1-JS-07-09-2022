addEventListener("DOMContentLoaded",()=>{
    // 17. Dado el valor que un cliente paga por un producto, calcular qué valor corresponde al costo total del
    // producto y cuánto es el valor del IVA. Considerando que el porcentaje del IVA puede variar en el
    // tiempo y de un producto a otro, este dato se lee por teclado.


    // Valor del producto y el iva 
    let producto=Number(prompt("Valor del producto: "))
    let iva=Number(prompt("Valor del iva: "))
    
    //Formula para agregar el iva
    let costo= (producto * iva)+producto   

    console.log(`El costo total es: ${costo}`)
})