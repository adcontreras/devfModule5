// LA DESTRUCTURACION DE OBJETOS LITERALES EN JS, TE PERMITE EXTRAER PROPIEDADES DE UN OBJETO Y ASIGNARLAS A VARIABLES/ CONSTANTES INDIVIDUALES DE MANERA MÁS CONVENIENTE

const persona = {
    nombre:"Adriana",
    edad: 20,
    ciudad: "La mejor ciudad"
}

// DESESTRUCTURACION
let {nombre, edad, ciudad} = persona

console.log(nombre,edad,ciudad);