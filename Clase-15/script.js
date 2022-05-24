//Rechaza, aceptada y pendiente
let divDolar = document.getElementById('divDolar')

setInterval(() => {
    fetch("https://criptoya.com/api/dolar")
    .then(response => response.json())
    .then(({blue, ccb, ccl, mep, oficial, solidario }) => {
        //let {blue, ccb, ccl, mep, oficial, solidario} = datos
        divDolar.innerHTML = `
            <h2>Tipos de dolar </h2>
            <p>Dolar Oficial: ${oficial} </p>
            <p>Dolar Solidario: ${solidario} </p>
            <p>Dolar Mep: ${mep} </p>
            <p>Dolar Ccl: ${ccl} </p>
            <p>Dolar Ccb: ${ccb} </p>
            <p>Dolar Blue: ${blue} </p>
        `
    })
    .catch(error => console.error(error))
    
}, 3000)

fetch('json/clientes.json')
.then(response => response.json())
.then(clientes => {
    
    clientes.forEach((cliente) => {
        let {index, balance, age, gender, name} = cliente
        divClientes.innerHTML += `
            <div id="cliente${index}">
            <h3>Nombre: ${name}</h3>
            <p>Genero: ${gender} </p>
            <p>Edad: ${age} </p>
            <p>Sueldo: ${balance} </p>
           </div> 
        `
    })
})


