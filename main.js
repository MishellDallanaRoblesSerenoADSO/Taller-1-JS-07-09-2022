addEventListener("DOMContentLoaded",()=>{
    // 25. En el programa de cocina de “Doña Anita” han dado la receta para la preparación de bizcocho especial
    // de chocolate. Por cada 100 gramos de harina hay que añadir 10 gramos de cacao y un puñado de
    // nueces. Si quiero prepararlos con 20 gramos de chocolate. La cantidad de gramos de harina para
    // hacer el bizcocho es

    // cantidad de gramos
    let gramos=Number(prompt("¿Cuántos gramos de cacao le aregará? ", 20))  

    // operación
    let t=gramos*10


    console.log(`La cantidad de gramos de harina que tiene que agregar es: ${t} gramos`)
})