/*let botonDark = document.querySelector('#botonDarkMode')
let botonLight = document.querySelector('#botonLightMode')

let darkMode = localStorage.getItem('darkMode') ?? 'light'
/*
if(localStorage.getItem('darkMode')) {
    darkMode = localStorage.getItem('darkMode')
} else {
    localStorage.setItem('darkMode', 'light')
}¨

if(darkMode == 'dark') {
    document.body.classList.add('darkMode')
}

botonDark.addEventListener('click', () => {
    //document.body.style.backgroundColor = "#000"
    //document.body.style.color = "#fff"
    document.body.classList.add('darkMode')
    localStorage.setItem('darkMode', 'dark')
})

botonLight.addEventListener('click', () => {
    //document.body.style.backgroundColor = "#fff"
    //document.body.style.color = "#000"
    document.body.classList.remove('darkMode')
    localStorage.setItem('darkMode', 'light')
})*/

const producto1 = {
    nombre: "Arroz",
    precio: 100
}
const producto2 = {
    nombre: "Dulce de leche",
    precio: 200
}
const producto3 = {
    nombre: "Fideos",
    precio: 120
}

let array = JSON.parse(localStorage.getItem('carrito')) ?? []

let boton1 = document.querySelector('#boton1')
let boton2 = document.querySelector('#boton2')
let boton3 = document.querySelector('#boton3')

boton1.addEventListener('click', () => {
    
    if(array.some(producto => producto.nombre == "Arroz")) {
        let indice = array.findIndex(producto => producto.nombre == "Arroz")
        array[indice].cant++
    } else {
        let producto1Array = {
            ...producto1,
            cant: 1
        }
        array.push(producto1Array)
    }

    localStorage.setItem('carrito', JSON.stringify(array))
})

boton2.addEventListener('click', () => {
    if(array.some(producto => producto.nombre == "Dulce de leche")) {
        let indice = array.findIndex(producto => producto.nombre == "Dulce de leche")
        array[indice].cant++
    } else {
        let producto2Array = {
            ...producto2,
            cant: 1
        }
        array.push(producto2Array)
    }

    localStorage.setItem('carrito', JSON.stringify(array))
})

boton3.addEventListener('click', () => {
    if(array.some(producto => producto.nombre == "Fideos")) {
        let indice = array.findIndex(producto => producto.nombre == "Fideos")
        array[indice].cant++
    } else {
        let producto3Array = {
            ...producto3,
            cant: 1
        }
        array.push(producto3Array)
    }

    localStorage.setItem('carrito', JSON.stringify(array))
})