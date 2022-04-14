//Numero Cadena Booleanos Null undefined
/*
1
2
3

"Esto es un texto"
 'Esto tambien es un texto'
 `Esto tambien es un texto especial`

 true
 false
 null
 undefined*/

 var nombre = "Francisco"
var nombre = 5
console.log(nombre)
var nombre = null
var nombre = undefined

let apellido = "Pugh"

apellido = "Smith"

const IVA = 1.21

//IVA = 1.23
/*
    "5" + "5" = "55"
    5  + 5 = 10
    "5" + 5 = "55"
    5 + "5" = "55"

    parseInt(5.999999999) => 5
    
let precio = parseFloat(prompt("Ingresa un precio"))
console.log(precio)
console.log(precio + IVA) //multiplicando un string y un numero



let precio = parseFloat(prompt("Ingrese un precio"))
let porcentaje = parseInt(prompt("Ingrese un descuento"))

let descuento = precio * porcentaje / 100
console.log(precio - descuento)

let bebida = prompt("Ingrese la bebida a tomar").toLowerCase();

if(bebida == "cafe") { //CAFE CaFe cAfE caFE
    console.log("Voy a tomar cafe")
} else if(bebida == "chocolatada") {
    console.log("Voy a tomar chocolatada")
} else if (bebida == "te") {
    console.log("Voy a tomar te")
} else {
    console.log("¿Y que estas tomando?")
}

if(true)
    console.log("Algo")
else 
    console.log("Algo x")


let num1 = 4
let num2 = 3

if(num1 == 5 && num2 == 10) {
    console.log("V")
} else {
    console.log("F")
}
*/
/*
    num1     &&     num2
     V        V      V
     V        F      F
     F        F      V
     F        F      F
*/

let numero1 = 5
let numero2 = 6

if(numero1 == 10 || numero2 == 20) {
    console.log("V")
} else {
    console.log("f")
}

/*
    num1     ||     num2
     V        V      V
     V        V      F
     F        V      V
     F        F      F
*/



