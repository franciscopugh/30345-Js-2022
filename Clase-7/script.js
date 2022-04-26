/*const sumarImpuestosDolar = (precio) => precio * 0.65 
const sumarIVA = (precio) => precio * 0.21
const sumarImpuestoNuevo = (precio, nuevoImpuesto) => precio * nuevoImpuesto

const calcularImpuestos = (precio, nuevoImpuesto ) => precio + sumarImpuestosDolar(precio) + sumarIVA(precio) + 
sumarImpuestoNuevo(precio,nuevoImpuesto)

console.log(calcularImpuestos(parseFloat(prompt("Ingrese un precio producto")), parseFloat(prompt("Ingrese un nuevo impuesto"))))*/

class Empleado {
    constructor(nombre, apellido, edad, cargo) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.cargo = cargo
    }
}

const empleado1 = new Empleado("Samuel", "Tocaimaza", 18, "Tutor")
const empleado2 = new Empleado("Javier", "Gimenez", 20, "Tutor")
const empleado3 = new Empleado("Francisco", "Pugh", 19, "Profesor")
const empleado4 = new Empleado("Maximo", "Manzoti", 18, "Tutor")
const empleado5 = new Empleado("Baltazar", "Salomon", 11, "Tutor")

let empleados = [empleado1, empleado2, empleado3, empleado4, empleado5]

//let condicionBusqueda = prompt("Ingrese el nombre de un empleado")
//let cargoABuscar = prompt("Ingrese un cargo")
//let nombreABuscar = prompt("Ingrese un nombre")
/*
empleados.forEach((empleadoEnArray, indice) => {
    console.log(empleadoEnArray)
    console.log(indice)
})*/

//console.log(empleados.find(persona => persona.nombre == "Javi" && persona.apellido == "Pugh"))
//console.log(empleados.find(persona => persona.edad >= 22))
//console.log(empleados.filter(empleado => empleado.nombre == condicionBusqueda))
//console.log(empleados.find(empleado => empleado.cargo == cargoABuscar && empleado.nombre == nombreABuscar))
//console.log(empleados.some(empleado => empleado.edad < 30))
//empleados = empleados.map(empleado => empleado.edad)
console.log(empleados)

let numeros = [5,6,10,20]
//  5 + 6 + 10 +20 
const sumaNumeros = numeros.reduce((prev, actual) => prev + actual,0)

const sumaEdad = empleados.reduce((emplPrev, emplActual) => emplPrev + emplActual, 0)
console.log(sumaNumeros)
console.log(sumaEdad / empleados.length)