
const inputs = document.querySelectorAll("input")
let inputsGuardados = []
inputs.forEach (input=>{
    console.log(input.value)

const btnAgregar = document.querySelector("#btnAgregar")
btnAgregar.addEventListener("click", enviar)
})
function guardarInputs(){
    inputsGuardados.push(inputs.value)
    console.table(inputsGuardados)
}
function enviar(){
    alert("Reserva confirmada")
    }


// //function reservarResto ()
// //const resto1 = {
//     nombre: 'Bamboo',
//     capacidad: 40
// }
// //const resto2 = { 
//     nombre: 'Sudaca',
//     capacidad: 40,
// }
// const resto3 = {
//     nombre: 'Lo de chola',
//     capacidad: 45,
// }
// const resto4 ={
//     nombre: 'Constanza',
//     capacidad: 45,
// }

