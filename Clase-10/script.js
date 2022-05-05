/*//localStorage.setItem("alumno", "Mario")
let arrayAlumnos = [{nombre: "Mario"}, {nombre:"Alejandro"}]
//Stringify paso de objeto a JSON
let AlumnosJSON = JSON.stringify(arrayAlumnos)
console.log(AlumnosJSON)

localStorage.setItem("alumno", AlumnosJSON )

//Parse pasa de JSON a Objeto
let alumnosParseados = JSON.parse(localStorage.getItem("alumno"))
console.log(alumnosParseados)

sessionStorage.setItem("tutor", "German")

console.log(sessionStorage.getItem("tutor"))

//localStorage.removeItem("alumno")*/

class Producto {
    constructor(id, nombre, marca, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.stock = stock;
    }

    mostrarNombre() {
        console.log(this.nombre)
    }
}

const producto1 = new Producto(1, "Arroz", "Arrocita", 100, 20)
const producto2 = new Producto(2, "Cafe", "Cafeeeeecitaaaa", 400, 30)
const producto3 = new Producto(3, "Pan", "La pancita", 150, 25)
const producto4 = new Producto(4, "Fideos", "Ay que ricos que son", 180, 10)
const producto5 = new Producto(5, "Te", "Tecita", 120, 30)

let productos = [producto1, producto2, producto3, producto4, producto5]
let carrito = []
let divProductos = document.getElementById('productos')

productos.forEach(producto => {
    divProductos.innerHTML += `
        <div class="card" id="producto${producto.id}" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">${producto.marca}</p>
                <p class="card-text">${producto.precio}</p>
                <p class="card-text">${producto.stock}</p>
                <button id="boton${producto.id}" class="btn btn-dark">Agregar al carrito</button>
            </div>
        </div>
        `
})

productos.forEach(producto => {
    document.getElementById(`boton${producto.id}`).addEventListener('click', () => {
        carrito.push(producto)
        localStorage.setItem("productosCarrito", JSON.stringify(carrito))
    })
})

document.getElementById("botonMostrar").addEventListener('click', () => {
    let arrayParseado = JSON.parse(localStorage.getItem('productosCarrito'))
    console.log(arrayParseado)
})