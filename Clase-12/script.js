/*let numero = 2

numero++ //numero +=1 numero = numero + 1
numero-- //numero -=1 numero = numero - 1
/*
if(numero % 2 == 0) {
    console.log("Numero par")
} else {
    console.log("Numero impar")
}

//Condicion         //Valores de verdad         //Valores false
(numero % 2 == 0) ? console.log("Numero par") : console.log("Numero impar")

let nota = 10

if(nota >= 1 && nota <= 5 ) {
    console.log("Alumno/a desaprobado/a")
} else if (nota === 6 || nota === 7) {
    console.log("Alumno/a aprobado/a con nota de Bien")
} else if(nota === 8 || nota === 9) {
    console.log("Alumno/a aprobado/a con nota de Muy Bien")
} else {
    console.log("Alumno/a aprobado/a con nota de Excelente")
}

(nota >= 1 && nota <= 5) ? console.log("Alumno/a desaprobado/a") : 
(nota === 6 || nota === 7) ? console.log("Alumno/a aprobado/a con nota de Bien") 
: (nota === 8 || nota === 9) ? console.log("Alumno/a aprobado/a con nota de Muy Bien") 
: console.log("Alumno/a aprobado/a con nota de Excelente")


// undefined y null



let personas =  [{nombre: "Samuel"}, {nombre: "Lautaro"}]

let personaBusqueda = personas.find(persona => persona.nombre == "Javier")

console.log(personaBusqueda ?? "Usuario no encontrado")

console.log(undefined ?? "Usuario no encontrado")

console.log(false || true)
console.log(false ?? true)

console.log(undefined ?? "Francisco")

let peliculas = JSON.parse(localStorage.getItem('Peliculas')) ?? []

console.log(peliculas)


let persona = {nombre: "Francisco"}

console.log(persona.sueldo ?? "Propiedad no encontrada")
console.log(persona.cv ?? "Te estamos llamando")*/

let animal = {
    nombre: "Firulais",
    raza: "Golden",
    edad: 3,
    peso:30,
    x: {
        nombre: "Francisco",
        apellido: "Pugh"
    }
}

function desestructurar ({nombre, raza}) {
    console.log(nombre, raza)
}

desestructurar(animal)

let producto = {
    precio: 120,
    nombre: "Arroz Arrocin",
    stock: 20
}

function aumentarStock({stock}, cantAumentar) {
    return stock += cantAumentar
}

producto.stock = aumentarStock(producto, 20)

console.log(producto)
/*
let {x : persona} = animal
let {correa} = animal
console.log(correa ?? "Propiedad no encontrada")
console.log(persona)*/


let array1 = [{nombre: "Javi", rol: "Tutor"}, {nombre:"Ferran", rol:"Tutor"}]
let array2 = [5,7,9]

let array3 = (array1).concat(array2)
let array4 = [...array1, 5, 7, ...array2]

console.log(array4)

let persona1 = {
    nombre: "Javier",
    apellido: "Gimenez"
}

let mentor = {
    ...persona1,
    sueldo: "x"
}

console.log(mentor)
/*
let [,,c,,,f] = array1

let {nombre, raza} = c
console.log(nombre, raza)

console.log(Math.max(...array1))
console.log(array3)
console.log(array4)

*/