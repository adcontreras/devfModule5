//RETORNAR UN VALOR EN UNA FUNCION 

function esPar(numero) {
    //EN BASE A UNA CONDICION DE OPERADOR TERNARIO, RETORNAR: "Es par" o "Es impar"
    const tipoDeNum = (numero % 2 === 0) ? "Es par" : "Es impar"
    return tipoDeNum
}

// EXPECTED OUTPUT EN LA CONSOLA: "Es par" o "Es impar"
console.log(esPar(1));