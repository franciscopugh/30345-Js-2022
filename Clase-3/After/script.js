/*console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)

for(let i = 1; i < 11;i++) { // i = i + 1
    console.log(i)
}
let inicioCiclo = parseInt(prompt("Ingrese el inicio"))
let numerosAMostrar = parseInt(prompt("Ingrese la cantidad de numeros a mostrar desde uno"))
//    INICIO     //FIN             //DE PRINCIPIO A FIN
for(let i = inicioCiclo; i < numerosAMostrar; i++) {
    console.log(i)
}*/
//while(true) mientras verdadero sea igual a verdadero
//0 significa compuerta logica cerrada 

//00000111110000
/*
if(0) {
    console.log("V")
} else {
    console.log("F")
}
*/
let continua = true;

while(continua) { //continua == true
    let numero1 = parseFloat(prompt("Ingrese un numero")) //NaN
    let numero2 = parseFloat(prompt("Ingrese un numero"))
    let operacion = prompt("Ingrese una operacion (+,-,/,*)")

    //   !v               F                                   !V    F
    if(!(isNaN(numero1) || isNaN(numero2)) && !(numero2 == 0 && operacion == "/")) {
        continua = false
    } else {
        alert("Por favor ingrese un numero valido")  
    }
    
    /*
        isNaN(numero1) || isNaN(numero2) == false
    */

}