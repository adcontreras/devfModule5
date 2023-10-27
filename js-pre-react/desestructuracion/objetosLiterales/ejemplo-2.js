// DARLE UN ALIAS/SOBRENOMBRE A LAS PROPIEDADES QUE SE DESTRUCTURAN

const persona = {
    nombre:"Adriana",
    edad: 20,
    ciudad: "La mejor ciudad"
}

// DESTRUCTURAR EL NOMBRE, con los dos puntos le reasigno un nuevo nombre en caso de que de forma global ya exista una variable asignada a ese "nombre"
let {nombre: nombreCompleto }=persona 

const nombre = "Laura"

console.log(nombreCompleto);