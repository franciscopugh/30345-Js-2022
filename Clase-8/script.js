/*console.log(document.getElementById("parrafo2"))
console.log(document.getElementsByClassName("classParrafos")[0].children[1])
console.log(document.getElementsByTagName("p")[1])*/
/*
let parrafo2 = document.getElementById("parrafo2")
let divParrafos = document.getElementById("divParrafos")

divParrafos.innerHTML += "<p>Hola, buenas noches</p>"
parrafo2.innerText = "Holaaaaaaaaaaaaaaaaaaaaa"

let parrafoCreado = document.createElement("p")

parrafoCreado.innerText = "Parrafo creado en JS"
parrafoCreado.id = "parrafoCreado"

divParrafos.prepend(parrafoCreado) //apreChild()
parrafoCreado.remove()*/

class Producto {
    constructor(id,nombre, marca, precio, stock) {
        this.id = id
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }
}

const producto1 = new Producto(1,"Yerba Mate", "La yerbita", 400, 20)
const producto2 = new Producto(2,"Fideos", "Fideito", 80, 25)
const producto3 = new Producto(3,"Mate cocido", "Matecito", 200, 15)
const producto4 = new Producto(4,"Cafe", "Le cafecito", 25, 10)

let productos = [producto1, producto2, producto3, producto4]

let divProductos = document.getElementById("divProductos")


productos.forEach(productoEnArray => {
    divProductos.innerHTML += `

        <div class="card productosArray" id="producto${productoEnArray.id}" style="width:18rem; margin: 1rem;">
            <div class="card-body">
                <h5 class="card-title">Nombre: ${productoEnArray.nombre}</h5>
                    <p class="card-text"> Marca: ${productoEnArray.marca} </p>
                    <p class="card-text"> Precio:$ ${productoEnArray.precio} </p>
                    <p class="card-text"> Stock: ${productoEnArray.stock} </p>
            </div>
        </div>
    `
}) 