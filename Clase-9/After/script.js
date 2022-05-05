let formulario = document.getElementById('idForm')
let arrayPersonas = []

document.getElementById('boton1').addEventListener('click', (e)=> {
    e.preventDefault()
    console.log("Hola")
})

document.getElementById('etiquetaA').addEventListener('click', (e) => {
    e.preventDefault()
})

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    let username = document.getElementById('exampleInputUsername1').value
    let email = document.getElementById('exampleInputEmail1').value
    let password = document.getElementById('exampleInputPassword1').value

    let usuario = {username: username, email: email, password:password}
    arrayPersonas.push(usuario)
    console.log(arrayPersonas)
    formulario.reset()
})