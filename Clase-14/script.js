/*setTimeout(() => {
    console.log("Cargado clientes")
}, 8000)

setTimeout(() => {
    console.log("Cargado cuentas")
}, 3000)

setTimeout(() => {
    console.log("Cargado Dinero")
}, 5000)
 {
}
setInterval(() => {
    console.log("Hola")
}, 1000)

const retornarPromesa = (res) => {
    return new Promise((resolve, reject) => {
        if(res === true) {
            resolve("Promesa resuelta")
        } else {
            reject("Promesa rechazada")
        }
    })
}

console.log(retornarPromesa(false))*/

const persona1 = {
    nombre: "",
    apellido: "",
    sueldo: ""
}

const persona2 =  {...persona1}

persona2.sueldo = 160000

Object.freeze(persona2)

Object.seal(persona2)
persona2.edad = 30


console.log(persona2.sueldo)
console.log(persona1.sueldo)

console.log(persona2.edad)
console.log(persona2)