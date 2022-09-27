addEventListener("DOMContentLoaded", (e)=>{
    //30. Ingrese una frase que lo identifique como programador de Software y luego mostar esta frase
    // invertida

    // frase
    let f= prompt("Coloque la frase: ")

    console.log(`${f}`)

    let finvertido =f.split("").reverse().join("")
    console.log(`${finvertido}`)
})
