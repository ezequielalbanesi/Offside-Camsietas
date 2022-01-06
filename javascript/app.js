const contenedorCarrito = document.getElementById('carrito-contenedor');
let productosJSON = [];
let carrito = [];




$(document).ready(function() {
   obtenerDatos()
   recuperar()  
    $("#miSeleccion option[value='pordefecto']").attr("selected", true);
    $("#miSeleccion").on("change", ordenar);
 }
 ) 



/* Inicio Recuperar Productos almacenados en storage*/
function recuperar(){
  let recuperado = JSON.parse (localStorage.getItem('carrito'));
if (recuperado != undefined) {
     carrito = recuperado
    carrito.forEach(recu=>{
      $('#carrito-contenedor').append(`<div class="productoEnCarrito">
                                    <p>${recu.nombre}</p>
                                    <p>Precio:${recu.precio}</p>
                                    <p id=cantidad${recu.id}>Cantidad:${recu.cantidad}</p>
                                    <button id=eliminar${recu.id} class="boton-eliminar">
                                    <i class="fas fa-trash-alt"></i></button>
                                    </div>
                                 `)
      actualizarCarrito()

let botonEliminar = document.getElementById(`eliminar${recu.id}`)
            botonEliminar.addEventListener('click', ()=>{
              botonEliminar.parentElement.remove()
              carrito = carrito.filter(el => el.id != recu.id);
              localStorage.setItem('carrito', JSON.stringify(carrito));
              actualizarCarrito();
                          Swal.fire(
                          'Eliminaste el producto!',
                              recu.nombre,
                              'error'
                            )
                          })
     })
     }
   }
/* Fin Recuperar Productos almacenados en storage*/   

/* Obtener datos Ajax*/ 
function obtenerDatos(){
    const URLJSON = "../javascript/producto.json"
    $.get(URLJSON, function(respuesta, estado){
      if (estado == "success") {
                              productosJSON = respuesta;
                              mostrarProductos();
                              }
                              }
                              )}

/* Funcion que muestra los productos*/
function mostrarProductos(){
      productoCamiseta();
      productoInternacional();
      productoBotines();
      productoSelecciones();
      productoShorts();
                        }

/* Funcion que renderiza las camisetas de primera division*/
function productoCamiseta(){
   productosJSON.forEach(producto =>{
      if(producto.id <48){
      $('#contenedor-productos').append(
       `  <li class="filtro">
      <div class="contenedorCard">
                 <div class="d-flex justify-content-center">
                  <img src=${producto.img} class="imagenCamisetas ">
                  </div>
                  <div class="d-flex justify-content-center flex-column">
                     <h5 class="card-title nombreProducto text-center">${producto.nombre}</h5>
                      <p class="Precio text-center"> $${producto.precio}</p>
                  </div>
                  <div class="d-flex justify-content-center mb-5">
                      <button class="btn btn-primary w-50 " id=boton${producto.id}>Comprar</button>
                  </div>
      </div>
     </li>`)
     $(`#boton${producto.id}`).click(()=>{ 
     agregarAlCarrito(producto.id)
     Swal.fire(
     'Agregaste al carrito',
     producto.nombre,
     'success')
      })
   }
})
}

/* Funcion que renderiza las camisetas de Futbol Internacional*/
function productoInternacional(){
   productosJSON.forEach(producto =>{
      if(producto.id > 48 && producto.id <= 66){
      $('#contenedor-internacional').append(
       `  <li class="filtro">
      <div class="contenedorCard">
                 <div class="d-flex justify-content-center">
                  <img src=${producto.img} class="imagenCamisetas ">
                  </div>
                  <div class="d-flex justify-content-center flex-column">
                     <h5 class="card-title nombreProducto text-center">${producto.nombre}</h5>
                      <p class="Precio text-center"> $${producto.precio}</p>
                  </div>
                  <div class="d-flex justify-content-center mb-5">
                      <button class="btn btn-primary w-50 " id=boton${producto.id}>Comprar</button>
                  </div>
      </div>
     </li>`)
     $(`#boton${producto.id}`).click(()=>{ 
     agregarAlCarrito(producto.id)
     Swal.fire(
     'Agregaste al carrito',
     producto.nombre,
     'success')
      })
   }
})
}
/* Funcion que renderiza las Botines*/
function productoBotines(){
   productosJSON.forEach(producto =>{
      if(producto.id > 66 && producto.id <= 77){
      $('#contenedor-botines').append(
       `  <li class="filtro">
      <div class="contenedorCard">
                 <div class="d-flex justify-content-center">
                  <img src=${producto.img} class="imagenCamisetas ">
                  </div>
                  <div class="d-flex justify-content-center flex-column">
                     <h5 class="card-title nombreProducto text-center">${producto.nombre}</h5>
                      <p class="Precio text-center"> $${producto.precio}</p>
                  </div>
                  <div class="d-flex justify-content-center mb-5">
                      <button class="btn btn-primary w-50 " id=boton${producto.id}>Comprar</button>
                  </div>
      </div>
     </li>`)
     $(`#boton${producto.id}`).click(()=>{ 
     agregarAlCarrito(producto.id)
     Swal.fire(
     'Agregaste al carrito',
     producto.nombre,
     'success')
      })
   }
})
}
/* Funcion que renderiza las camisetas de selecciones*/
function productoSelecciones(){
   productosJSON.forEach(producto =>{
      if(producto.id > 77 && producto.id <= 92){
      $('#contenedor-selecciones').append(
       `  <li class="filtro">
      <div class="contenedorCard">
                 <div class="d-flex justify-content-center">
                  <img src=${producto.img} class="imagenCamisetas ">
                  </div>
                  <div class="d-flex justify-content-center flex-column">
                     <h5 class="card-title nombreProducto text-center">${producto.nombre}</h5>
                      <p class="Precio text-center"> $${producto.precio}</p>
                  </div>
                  <div class="d-flex justify-content-center mb-5">
                      <button class="btn btn-primary w-50 " id=boton${producto.id}>Comprar</button>
                  </div>
      </div>
     </li>`)
     $(`#boton${producto.id}`).click(()=>{ 
     agregarAlCarrito(producto.id)
     Swal.fire(
     'Agregaste al carrito',
     producto.nombre,
     'success')
      })
   }
})
}

/* Funcion que renderiza los shorts*/
function productoShorts(){
   productosJSON.forEach(producto =>{
      if(producto.id > 92 && producto.id <= 106){
      $('#contenedor-shorts').append(
       `  <li class="filtro">
      <div class="contenedorCard">
                 <div class="d-flex justify-content-center">
                  <img src=${producto.img} class="imagenCamisetas ">
                  </div>
                  <div class="d-flex justify-content-center flex-column">
                     <h5 class="card-title nombreProducto text-center">${producto.nombre}</h5>
                      <p class="Precio text-center"> $${producto.precio}</p>
                  </div>
                  <div class="d-flex justify-content-center mb-5">
                      <button class="btn btn-primary w-50 " id=boton${producto.id}>Comprar</button>
                  </div>
      </div>
     </li>`)
     $(`#boton${producto.id}`).click(()=>{ 
     agregarAlCarrito(producto.id)
     Swal.fire(
     'Agregaste al carrito',
     producto.nombre,
     'success')
      })
   }
})
}

/* Funcion Para agregar al carrito*/
function agregarAlCarrito(id) {
  /* Si el producto esta repetido, agrega una unidad*/
    let repetido = carrito.find(productoR => productoR.id == id);
    if(repetido){
        repetido.cantidad =  repetido.cantidad + 1;
        $(`#cantidad${repetido.id}`).html(`Cantidad:${repetido.cantidad}`)
        actualizarCarrito()
    }
  /* Si el producto no esta repetido, lo agrega en el modal*/
    else{
      let productoAgregar = productosJSON.find(prod => prod.id == id);
    carrito.push(productoAgregar);
    
        productoAgregar.cantidad = 1;
                               $('#carrito-contenedor').append(`<div class="productoEnCarrito">
                                    <p>${productoAgregar.nombre}</p>
                                    <p>Precio:${productoAgregar.precio}</p>
                                    <p id=cantidad${productoAgregar.id}>Cantidad:${productoAgregar.cantidad}</p>
                                    <button id=eliminar${productoAgregar.id} class="boton-eliminar">
                                    <i class="fas fa-trash-alt"></i></button>
                                    </div>`)
           actualizarCarrito()
 /* Boton para eliminar productos del modal*/
          let botonEliminar = document.getElementById(`eliminar${productoAgregar.id}`)
          botonEliminar.addEventListener('click', ()=>{
              botonEliminar.parentElement.remove()
              carrito = carrito.filter(el => el.id != productoAgregar.id);
              localStorage.setItem('carrito', JSON.stringify(carrito));
              actualizarCarrito();
                          Swal.fire(
                          'Eliminaste el producto!',
                              productoAgregar.nombre,
                              'error'
                            )
    })  
    } 
    localStorage.setItem('carrito', JSON.stringify(carrito));  
}


function actualizarCarrito() {
   contadorCarrito.innerText = carrito.reduce((acc , el)=> acc + el.cantidad, 0);
   precioTotal.innerText = carrito.reduce((acc, el) => acc + (el.precio * el.cantidad) , 0)
}

  /*Inicio funcion para finalizar la compra*/
function finalizarCompra(){
$(`#botonModal`).click(()=>{
   if (carrito.length == 0) {
                Swal.fire({
                                    position: 'center',
                                     icon: 'error',
                                     title: 'Oops...',
                                       text: 'Tu carrito esta vacio!',
                                      showConfirmButton: false,
                                     timer: 1500
                                    })

                                     setTimeout(()=>{
                          },2000)
                  }
  else{
     Swal.fire({
                    position: 'center',
                     icon: 'success',
                     title: 'Estas a un paso de completar tu compra',
                      showConfirmButton: false,
                     timer: 1500
                    })

                     setTimeout(()=>{
               contenedorCarrito.innerHTML='';
               window.location.href = "../html/tarjeta.html"
          },2000)

  }
 })

}
finalizarCompra()

  /*Inicio funcion para ordenar*/
function ordenar() {
    let seleccion = $("#miSeleccion").val();
    if (seleccion == "menor") {
        productosJSON.sort(function(a, b) {
            return a.precio - b.precio
        });
    } else if (seleccion == "mayor") {
        productosJSON.sort(function(a, b) {
            return b.precio - a.precio
        });
    } else if (seleccion == "alfabetico") {
        productosJSON.sort(function(a, b) {
            return a.nombre.localeCompare(b.nombre);
        });
    }
    $('.filtro').remove();
    mostrarProductos();
}




