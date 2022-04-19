/*const producto1 = {
    nombre: "Yerba mate",
    marca: "La yerbita",
    precio: 500,
    stock: 20
}

const producto2 = {
    nombre: "Fideos",
    marca: "Fideito",
    precio: 100,
    stock: 25
}

producto1 = producto2
producto1.precio = 600
console.log(producto1.precio)
console.log(producto1["nombre"])

for(let propiedad in producto1) {
    /*if(propiedad == "precio") {
        console.log(producto1[propiedad] = producto1[propiedad]* 1.20)
    }
    console.log(producto1[propiedad])
}

function Producto(nombreParam, marcaParam, precioParam, stockParam) {
    this.nombre = nombreParam
    this.marca = marcaParam
    this.precio = precioParam
    this.stock = stockParam
    this.mostrarStock = () => console.log(this.stock)
}*/

class Producto {
    constructor(nombre, marca, precio, stock) {
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }

    mostrarStock() {
        console.log(this.stock)
    }

    aumentarStock(nuevoStock) {
        this.stock += nuevoStock//this.stock = this.stock + nuevoStock
    }

    disminuirStock(nuevoStock) {
        if((this.stock - nuevoStock) < 0) {
            alert("Por favor ingrese un stock valido")
        } else {
            this.stock -= nuevoStock//this.stock = this.stock - nuevoStock
        }
        
    }

}

const producto1 = new Producto("Cafe","Cafecito", 300, 20)
const producto2 = new Producto("Arroz", "Arrocito", 200, 10)
/*const producto3 = new Producto(
    prompt("Ingrese un nombre del producto"),
    prompt("Ingrese una marca"),
    parseFloat(prompt("Ingrese un precio")),
    parseInt(prompt("Ingrese un stock"))
)*/

let opcion = parseInt(prompt("Ingrese 1 para aumentar Stock, ingrese 2 para disminuir stock"))

if(opcion === 1) {
    producto2.aumentarStock(parseInt(prompt("Ingrese un monto a aumentar")))
} else if(opcion === 2) {
    producto2.disminuirStock(parseInt(prompt("Ingrese un monto a disminuir")))
} else {
    alert("Opcion no valida")
}
console.log(producto2.stock)
