//EN BASE A "esDiaLaborable", definir si "Nos sabemos la chambear" | "Trabajar o descansar"

const esDiaLaborable = true

//expected output : "Trabajar o descansar"

const mensaje = esDiaLaborable ? "Trabajar" : "Descansar"
console.log(mensaje);

// NOTA: INVESTIGAR VALORES TRUTHY Y FALSY

//SOLO HAY 6 VALORES FALSOS EN JS FALSY : UNDENFINE, NULL, NaN , 0 , ""(CADENA VACIA) Y FALSE POR SUPUESTO