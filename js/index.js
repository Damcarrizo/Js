class reservarResto {

    // funcion constructora//
    constructor(nombre,cliente, disponibilidad,dia){
this.nombre = nombre
this.cliente = cliente
this.disponibilidad = disponibilidad
this.dia = dia
    }

    // si se cae una reserva//

ReservaCae(){
    let error = 'Lugar disponible'
    if(this.disponibilidad == false){
        this.disponibilidad = true
    }else{
        console.log (error)
    }
}

//si esta lleno el resto//

ReservaLlena(){
    let error = 'Restaurante Lleno'
    if(this.disponibilidad == true){
    this.disponibilidad = false
    }else{
        console.log(error)
    }
}

}
const reserva  =[]
let resto1 =new reservarResto ('Bamboo', '', true,'')
let resto2 =new reservarResto ('Sudaca', '', false,'')
let resto3 =new reservarResto ('Lo de chola', '', true,'')
let resto4 =new reservarResto ('Constanza', '', true,'')

reserva.push(resto1, resto2, resto3, resto4)

//Funcion para encontrar restos dispobibles//

function verDisponible () {let disponibles = reserva.filter(reservarResto=>reservarResto.disponibilidad==true)
    console.log (disponibles)
}

//Funcion para encontrar un resto//

function verResto () { let opcResto = reserva.find (reserva=>reserva.nombre == 'Bamboo')
console.log(opcResto)
}

// Agregar Nuevo Restarurante

function agregarResto(){
    let nombredelrestonuevo = prompt ('Ingrese el nombre del restaurante a agregar:')
    let disponibilidadnuevo = confirm ('ingrese si esta disponible:')
    let dianuevo = prompt ('Ingrese los dias disponibles:')
    let restonuevo = new reservarResto(nombredelrestonuevo, disponibilidadnuevo, dianuevo)
    console.log (restonuevo)
    reserva.push(restonuevo)

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

