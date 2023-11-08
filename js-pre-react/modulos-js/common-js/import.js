const {error, info}= require ("./export.js") //ESTA SINTAXIS DEL REQUIRE NO LO VA A LEER EL NAVEGADOR, PARA EJECUTAR EL COMADO LO TENGO QUE HACER EN LA TERMINAL

console.log("Esta es una alerta importada de tipo: " , info);