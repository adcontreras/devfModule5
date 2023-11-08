// CREAR UNA PROMESA Y CONSUMIRLA PARA LLEVARLE UN HELADO A UN AMIGO SI LA HELADERIA ESTA ABIERTA

let heladeriaAbierta = false

// FORMAS DE USAR PROMESAS
// 1. CREAR LAS REGLAS DE LA PROMESA. NOS PUEDE TOCAR O NO 
const traerHelado = new Promise( function(resolve, reject) {
    //LOGICA DE LA PROMESA
    if (heladeriaAbierta){
        resolve("Heladeria abierta")
    }else{
        reject("Heladeria cerrada")
    }
})

//2.RECIBIR PROMESAS COMO RESPUESTA
traerHelado.then(function(response) {
    //codigo..
    console.log(response);
}).catch(function(error) {
    console.error( "Heladeria bonita" + error);
})


