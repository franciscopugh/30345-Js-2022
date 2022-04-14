/*function saludar() {
    alert("Hola.")
}

saludar()
saludar()
saludar()
saludar()*/
/*
const IVA = 1.21

//let precioProducto = parseFloat(prompt("Ingrese el precio de un producto"))//1000

function calcularIVA(producto) {
    let impuestoX = 1.4
    const IVA = 1.30
    alert((producto * IVA) * impuestoX)
}
//alert(impuestoX)
calcularIVA(100)*/
/*
let numero1 = parseFloat(prompt())
let numero2 = 10

function suma(num1, num2) {
    return num1 + num2
}

let resultado1 = suma(numero1, numero2)
let resultado2 = suma(10,20)

alert(resultado1 + resultado2)*/
/*
function sumar(num1, num2) {
    return num1 + num2
}

function multiplicar(num1, num2) {
    return num1 * num2
}

function dividir(num1, num2) {
    return num1 / num2
}

function restar(num1, num2) {
    return num1 - num2
}


const sumar = function(num1, num2) {return num1 + num2}
const restar = function(num1, num2) {return num1 - num2}
const multiplicar = function(num1, num2) {return num1 * num2}
const dividir = function(num1, num2) {return num1 / num2}

*/

const sumar = (num1, num2) => num1 + num2
const restar = (num1, num2) => num1 - num2
const multiplicar = (num1, num2) => num1 * num2
const dividir = (num1, num2)  => num1 / num2

let numero1 = parseFloat(prompt("Ingrese un numero"))
let numero2 = parseFloat(prompt("Ingrese otro numero"))
let operacion = prompt("Ingrese una operacion (+,-,*,/)")

if(operacion === "+") {
    alert(sumar(numero1, numero2))
} else if(operacion === "*") {
    alert(multiplicar(numero1, numero2))
} else if(operacion === "/") {
    alert(dividir(numero1, numero2))
} else if(operacion === "-") {
    alert(restar(numero1, numero2))
} else {
    alert("Operacion no valida")
}