//CONEXION CON DOM JS
const restaurante = document.querySelector("#restaurante")
const nombre_completo = document.querySelector("#inputNombre")
const comensales = document.querySelector("#inputComensales")
const dia = document.querySelector("#inputDia")
const btnReserva = document.querySelector("#btnReserva")


//Constructor

class Reserva{
    constructor(restaurante, nombre_completo, comensales, dia){
        this.restaurante = restaurante
        this.nombre_completo = nombre_completo
        this.comensales  = parseInt(comensales)
        this.dia = dia
    }
    confirmarReserva(){
        let confirmar = (this.restaurante && this.nombre_completo && this.comensales && this.dia)
        return confirmar
    }
}



// Base datos ficticia
const nombresRestaurantes = [{nombre: "Constanza", Capacidad: 40},
                             {nombre: "Lo de Luis", Capacidad: 40},
                             {nombre: "Bamboo", Capacidad: 40},
                             {nombre: "El Tuerto", Capacidad: 40},
]

const diaReserva =[ {dia:"Martes"}, 
                    {dia:"Miercoles"},
                    {dia:"Jueves"},
                    {dia:"Viernes"},
                    {dia:"Sabado"},
                    {dia:"Domingo"},
]


//Datos Cargados
const cargarDatos = (restaurante, array)=> {
    if (array.length > 0) {
        array.forEach(elemento => {
            restaurante.innerHTML += `<option value=" ${elemento.nombre}">${elemento.nombre}</option>`
            })
    }else{
        console.error("No existen elementos en el array")
    }
}

const cargarDia = (inputDia,array)=> {
    if (array.length > 0) {
        array.forEach(elemento => {
            inputDia.innerHTML += `<option value="${elemento.dia}">${elemento.dia}</option>`
            })
    }else{
        console.error("No existen elementos en el array")
    }
}
cargarDatos (restaurante, nombresRestaurantes)
cargarDia (inputDia, diaReserva)

//Datos completos

const datosCompletos = () => {

    if (restaurante.value !== "..." && nombre_completo.value !== "" &&  comensales.value >=1  && comensales.value <=10 && dia.value !== "..." ) {
    return true
}else {
        return false
    }
} 

const realizarReserva = () => {
    debugger
    console.log("hola")
    if(datosCompletos()) {
        const reserva = new Reserva (restaurante.value, nombre_completo.value, comensales.value, dia.value)
        enviarReserva(reserva)
    }else{
        alert(" ✋ Completa los datos para reservar.")
    }
}

const enviarReserva = (reserva) => {
    localStorage.setItem("Reserva", JSON.stringify(reserva))

    alert("Reseva confirmada, nos vemos pronto :wink:")

}

btnReserva.addEventListener("click",realizarReserva)


// //const enviarReserva = () => {
//     const enviar = {
//         fechareserva: new Date () .toLocaleDateString(),
//         restaurante: restaurante[restaurante.selectedIndex].text,
//         nombre: nombre_completo[nombre_completo.value].text,
//         comensales: comensales[comensales.value].text,
//         dia: dia[dia.selectedIndex].text
//     }
//     localStorage.setItem("Reserva", JSON.stringify(enviar))
//     alert("Reseva confirmada, nos vemos pronto :wink:")
//     btnReserva.addEventListener("click",()=> realizarReserva)

// }

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

