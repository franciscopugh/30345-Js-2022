class Auto {
    constructor(modelo,marca,año,precio) {
        this.modelo = modelo;
        this.marca = marca;
        this.año = año;
        this.precio = precio;
    }
}

const auto1 = new Auto("4", "renault", 2012, 1200)
const auto2 = new Auto("600", "fiat", 2010, 1000)
const auto3 = new Auto("500", "fiat", 2008, 800)
const auto4 = new Auto("Clio", "renault", 2011, 1100)

let autos = [auto1, auto2, auto3, auto4]

//let buscador = prompt("Ingrese marca para buscar")
//console.log(autos.filter(auto => auto.marca == buscador))



let boton1 = document.getElementById("boton1")
let inputColor = document.getElementById("inputColor")
let inputTexto = document.getElementById("inputTexto")
let divProductos = document.getElementById("divProductos")

boton1.addEventListener('click', function mostrarConsola() {
    console.log("Hola desde aqui 1")
})

boton1.addEventListener('click', function mostrarConsola() {
    console.log("Hola desde aqui 2")
})

inputColor.addEventListener('input', () => {
    document.body.style.backgroundColor = inputColor.value
})

inputTexto.addEventListener('change', () => {
    let buscador = inputTexto.value
    console.log(buscador.toLowerCase())
    let autosFiltrados = autos.filter(auto => auto.marca.includes(buscador.toLowerCase()))

    autosFiltrados.forEach(auto => {
        divProductos.innerHTML += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">Modelo: ${auto.modelo}</h5>
                <p>Marca: ${auto.marca} </p>
                <p>Año: ${auto.año} </p>
                <p>Precio: $${auto.precio} </p>
            </div>
        </div>
        `
    })
})


/*
boton1.onclick = () => {
    console.log("Hola desde onclick 1")
} 

boton1.onclick = () => {
    console.log("Hola desde onclick 2")
} */
