// EN JS, LAS PROMESAS SON OBJETOS QUE REPRESENTAN UN VALOR QUE PUEDE ESTAR DISPONIBLE EN UN TIEMPO INDEFINIDO POR NATURALEZA SON ESTRUTUTAS ASINCRONAS 


//los objetos son clases, que son moldes que se requiere que se instancien(hacer referencia) con la palabra reservada new 

//AQUI ESTAMOS CREANDO LA ESTRUCTURA DE UNA PROMESA 
const promesa = new Promise(function (resolve, reject) {
    //LAS PROMESAS TIENEN METODOS
    resolve()
    reject()
})

//AQUI ESTAMOS CONSUMIENDO LA PROMESA (ES LO QUE NORMALMENTE VAMOS A HACER)
promesa.then(function (response) {
    //codigo...
    console.log(response);  
}).catch(function (error) {
    console.error(error);
})