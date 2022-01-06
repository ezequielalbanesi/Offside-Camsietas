function validadorForm(){
let form = document.getElementById("formulario")
form.addEventListener("submit", validar);
}
validadorForm()


function validar(e){
let numeroTarjeta = parseInt($("#NumeroTarjeta").val())  
let cardnumber = numeroTarjeta.toString()
let codigoSeguridad = parseInt($("#Codigo").val())
let codeSeguridad = codigoSeguridad.toString()
let Mes = parseInt($("#mes").val())
let Year = parseInt($("#Year").val())
let Name = ($("#Nombre").val())


/*Verificacion numeros de la tarjeta */
if ( isNaN(numeroTarjeta) || cardnumber.length != 16){
    e.preventDefault();
 Swal.fire({
                                    position: 'center',
                                     icon: 'error',
                                     title: 'Oops...',
                                       text: 'Numero de tarjeta Incorrecto',
                                      showConfirmButton: false,
                                     timer: 1500
                                    })

                                     setTimeout(()=>{
                          },2000)
}
/*Verificacion Nombre de la tarjeta */
    else if (Name === null || Name == ''|| !/^[a-z A-Z]*$/g.test(Name)) {
    e.preventDefault();
 Swal.fire({
                                    position: 'center',
                                     icon: 'error',
                                     title: 'Oops...',
                                       text: 'Nombre Incorrecto',
                                      showConfirmButton: false,
                                     timer: 1500
                                    })

                                     setTimeout(()=>{
                          },2000)

  }
  /*Verificacion Vencimiento */
  else if (isNaN(Mes)|| isNaN(Year)) {
      e.preventDefault();
 Swal.fire({
                                    position: 'center',
                                     icon: 'error',
                                     title: 'Oops...',
                                       text: 'Vencimiento incorrecto',
                                      showConfirmButton: false,
                                     timer: 1500
                                    })

                                     setTimeout(()=>{
                          },2000)
}
  /*Verificacion Codigo de seguridad */
else if (isNaN(codigoSeguridad) || codeSeguridad.length != 3 ) {
    e.preventDefault();
                    Swal.fire({
                                    position: 'center',
                                     icon: 'error',
                                     title: 'Oops...',
                                       text: 'Codigo de Seguridad incorrecto',
                                      showConfirmButton: false,
                                     timer: 1500
                                    })

                                     setTimeout(()=>{
                          },2000)
  }
  /*Verificacion Si el carrito tiene algun producto */
 else if (carrito.length == 0) {
    e.preventDefault();
      $('.texto').remove();
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
  
   /* Si todo esta ok, vacio el carrito, el local storage y actualizo el monto del carrito */
  else{
           $("#contenedorCompra").append('<h1>Muchas gracias por tu compra</h1>')
          carrito = []
          localStorage.clear()
          actualizarCarrito()  
     
  }
 }