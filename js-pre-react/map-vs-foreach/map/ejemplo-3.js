// CREAR UN ARREGLO DE LAS LONGITUDES DE LAS PALABRAS DE OTRO ARREGLO
// EL MAP RETORNA UN ARREGLO DENTRO DE OTRO ARREGLO

const palabras = ["Linterna", "Llanta"]

// SALIDA ESPERADA [8,6]
const longitudes = palabras.map(palabra => {
    return palabra.length
});

console.log(longitudes);