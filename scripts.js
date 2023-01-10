document.querySelector('.texto-usuario').addEventListener('input', function() {
  var invalidCharacters = /[A-ZÁÉÍÓÚÜáéíóúüÀÈÌÒÙàèìòùÇçÑñÏïÖöÜü]|['´`]/g
  ;
  var foundInvalid = false;
  
  // Busca caracteres no válidos
  if (invalidCharacters.test(this.value)) {
    foundInvalid = true;
  }
  
  // Reemplaza caracteres no válidos
  this.value = this.value.replace(invalidCharacters, '');
  
  // Muestra alerta si se encontraron caracteres no válidos
  if (foundInvalid) {
    alert('No se permiten mayúsculas ni caracteres acentuados');
  }
});



  // function copyText() {
  //   let text = document.getElementById("texto-usuario").value;
  
  //   if (text === "") {
  //     alert("Please enter some text to copy before submitting.");
  //   } else {
  //     document.getElementById("parrafo-a-copiar").innerHTML = text;
  //     document.getElementById("texto-usuario").value = "";
  //   }
  // }
  
  // let button = document.getElementById("encriptador");
  // button.addEventListener("click", copyText);
  

//   function capturarTexto(event){
//     event.preventDefault();
//     document.getElementById("parrafo-a-copiar").innerHTML = "";
    
//     let texto = document.getElementById("texto-usuario").value;

//     if (texto === "") {
//       alert("Por favor, escribe algo para encriptar antes de enviar");
//     } else {
//     document.getElementById("parrafo-a-copiar").value = texto;
//     document.getElementById("texto-usuario").value = "";
//   }
// }



// let boton = document.getElementById("encriptador");
// boton.addEventListener("click", capturarTexto);







// function capturarTexto(){
//     document.getElementById("parrafo-a-copiar").innerHTML = "";
//     // Obtener el texto de la textarea
//     let texto = document.getElementById("texto-usuario").value;

     

//     // Crear un elemento párrafo y establecer su texto al texto de la textarea
//     let parrafo = document.createElement("p");
//     parrafo.textContent = texto;

//     // Agregar el elemento párrafo al div
//     document.getElementById("parrafo-a-copiar").appendChild(parrafo);

//     document.getElementById("texto-usuario").value = "";
// }


// let boton = document.getElementById("encriptador");
// boton.addEventListener("click", capturarTexto);

document.querySelector('#encriptador').addEventListener('click', function(event) {
  event.preventDefault(); // Evita que se envíe el formulario

  // Obtiene el valor de la textarea texto-usuario
  var textoUsuario = document.querySelector('#texto-usuario').value;

  var encriptado = textoUsuario.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join(''); 

  // Asigna el valor a la textarea parrafo-a-copiar
  document.querySelector('#parrafo-a-copiar').value = encriptado;

  // Limpia el valor de la textarea texto-usuario
  document.querySelector('#texto-usuario').value = '';
});

document.querySelector('.resultado-copiar').addEventListener('click', function(event) {
  event.preventDefault(); // Evita que se envíe el formulario

  // Obtiene el valor de la textarea parrafo-a-copiar
  var parrafoACopiar = document.querySelector('#parrafo-a-copiar').value;

  // Asigna el valor a la textarea texto-usuario
  document.querySelector('#texto-usuario').value = parrafoACopiar;

  // Limpia el valor de la textarea parrafo-a-copiar
  document.querySelector('#parrafo-a-copiar').value = '';
});

document.querySelector('#desencriptador').addEventListener('click', function(event) {
  event.preventDefault(); // Evita que se envíe el formulario

  // Obtiene el valor de la textarea texto-usuario
  var textoUsuario = document.querySelector('#texto-usuario').value;

  var desencriptado = textoUsuario.split('').map(char => String.fromCharCode(char.charCodeAt(0) - 1)).join(''); 

  

  // Limpia el valor de la textarea texto-usuario
  document.querySelector('#texto-usuario').value = desencriptado;
});
