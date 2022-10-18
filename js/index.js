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

const alerta = (icono, titulo, mensaje) => {
    Swal.fire({
        icon: icono,
        title: titulo,
        text: mensaje,
      })
}



// Base datos ficticia
const URL = "../assets/Datos/Restaurantes.json"
let opcionesResto = []
contenidoHTML = ""



const mostrarDatos = (contenido) =>{
    const{
        id,
        Nombre,
        Capacidad,
        Dias
    } = contenido
}

//Datos Cargados
const cargarContenido  = async ()=> {
    try {
        const response = await fetch(URL)
        const data = await response.json()
              opcionesResto = data
              opcionesResto.forEach(element =>{
                contenidoHTML += cargarDatos
              })
    } 
    catch (error) {
        contenidoHTML += mostrarError()
    }
    finally {
        contenedor.innerHTML = contenidoHTML
    }
}

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
    console.log("hola")
    if(datosCompletos()) {
        const reserva = new Reserva (restaurante.value, nombre_completo.value, comensales.value, dia.value)
        enviarReserva(reserva)
    }else{
        alerta("warning","Oopss...","✋ Completa los datos para reservar.")
    }
}

const enviarReserva = (reserva) => {
    localStorage.setItem("Reserva", JSON.stringify(reserva))

    alerta("succes", "Perfectooo!!!", "Tu reserva ha sido confirmada")

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

