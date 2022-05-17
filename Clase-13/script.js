/*let nombre = "Fran"
Swal.fire(`Hola ${nombre}`)


*/

let boton1 = document.querySelector('#boton1')
let botonCarrito = document.querySelector('#botonCarrito')

boton1.addEventListener('click', () => {
    Swal.fire({
        icon: 'error',
        title: 'Ocurrio un error',
        text: 'Se cayo el servidor',
        footer: '<a href="">Denuncie este sitio</a>'
      })
})

botonCarrito.addEventListener('click', () => {
   /* Swal.fire({
        icon: 'success',
        title: 'Producto agregado al carrito'
    })*/
    Toastify({
        text: "Producto agregado",
        duration: 3000,
        //destination: "https://github.com/apvarun/toastify-js",
        //newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
})

$('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
})