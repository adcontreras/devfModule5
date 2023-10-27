// DESTRUCTURACION DE OBJETOS COMO PARAMETROS DE FUNCIONES

function imprimirInformacion({nombre,edad}){
    console.log(`Nombre: ${persona.nombre} , Edad ${persona.edad}`);
}

const persona = {
    nombre:"Adriana",
    edad: 20,
    ciudad: "La mejor ciudad"
}

imprimirInformacion(persona)

// EN ESTE CASO ESTAMOS PASANDO UN OBJETO COMO ARGUMENTO A LA FUNCION "imprimirInformacion", Y LUEGO DESESTRUCTURAMOS EL OBJETO DIRECTAMENTE EN LOS PARÁMETROS DE LA FUNCION PAA ACCEDER A LAS PROPIEDADES DENTRO DE LA FUNCION  