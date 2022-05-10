class Producto {
    constructor(nombre, marca, precio, stock) {
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.stock = stock;
    }
}

let productos = []

if(localStorage.getItem('Productos')) {
    productos = JSON.parse(localStorage.getItem('Productos'))
} else {
    localStorage.setItem('Productos', JSON.stringify(productos))
}

let formularioId = document.querySelector('#formulario')
let divProductos = document.querySelector('#divProductos')
let botonProductos = document.querySelector('#botonProductos')

formularioId.addEventListener('submit', (e) => {
    e.preventDefault()
    let datForm = new FormData(e.target)
    const producto = new Producto(datForm.get('nombre'), datForm.get('marca'), datForm.get('precio'),datForm.get('stock') )
    productos.push(producto)
    console.log(productos)
    localStorage.setItem('Productos', JSON.stringify(productos))
    formularioId.reset()
})

botonProductos.addEventListener('click', () => {
    let productosStorage = JSON.parse(localStorage.getItem('Productos'))

    productosStorage.forEach(producto => {
        divProductos.innerHTML += `
            <div class="card border-secondary mb-3" style="max-width: 20rem;">
                <div class="card-header">${producto.nombre}</div>
                    <div class="card-body">
                    <h4 class="card-title">${producto.marca}</h4>
                    <p class="card-text">$${producto.precio}</p>
                    <p class="card-text">$${producto.stock}</p>
                </div>
            </div>
        `
    })
})

input.value = " "
