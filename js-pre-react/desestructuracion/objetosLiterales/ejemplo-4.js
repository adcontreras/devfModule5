
const persona = {
    nombre:"Adriana",
    edad: 20,
    ciudad: "La mejor ciudad",
    direccion:{
        calle:"123 calle principal",
        colonia: "colonia bonita"
    }
}

// DESESTRUCTURACION ANIDADA

let {nombre = 'Luna', direccion:{calle, colonia}} = persona

console.log(calle, colonia);