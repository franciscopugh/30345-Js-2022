/*let array = []
let array2 = [true, "Hola", 4, "Chau"]


console.log(array2[10])
persona.nombre
persona["nombre"]*/

//console.log(isNaN(true)) //Toma como true como 1
/*
for(let i = 0; i < array2.length; i++) {
    
    if(isNaN(array2[i])) {
        continue
    }
    console.log(array2[i]) //0,1,2,3
}

console.log(array2)

array2.unshift("Francisco") //Princio del array
array2.push("Francisco") //Final del array

console.log(array2)

array2.shift()
array2.pop()
array2.pop()
array2.pop()
console.log(array2)*/

let nombres1 = ["Gustavo", "Samuel", "Fer", "Francisco", "Lautaro", "German"]
let nombres2 = ["Carla", "Baltazar"]
/*console.log(nombres)

console.log(nombres.splice(0,nombres.length))

console.log(nombres)


for(let i = 0; i < nombres.length; i++) {
    console.log(i)
    if(nombres[i] == "Samuel" || nombres[i] == "German") {
        continue //break
    }

    console.log(nombres[i])
    nombres.splice(i,1)
}
*/
console.log(nombres1.join("-"))
let nombres3 = nombres1.concat(nombres2)

console.log(nombres3.slice(1,3))
/*
let nombreAEliminar = prompt("Ingrese un nombre a eliminar")

let indice = nombres3.indexOf(nombreAEliminar)

console.log(indice)

if(indice != -1) {
    nombres3.splice(indice,1)
} else {
    alert("No encontre a dicha persona")
}¨*/

console.log(nombres3.includes("Samuel"))
console.log(nombres3.reverse())

class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

const persona1 = new Persona("Francisco", "Pugh", 50)
const persona2 = new Persona("German", "Cuevas", 20)

let personas = [persona1,persona2]

console.log(personas)

for(let persona of personas) {
    for(let propiedad in persona) {
        if(propiedad == "apellido") {
            console.log(persona[propiedad])
        }
            
    }
}

/*
*/