function capturarTexto(){
    event.preventDefault();
    // Obtener el texto de la textarea
    let texto = document.getElementById("texto-usuario").value;

    // Crear un elemento párrafo y establecer su texto al texto de la textarea
    let parrafo = document.createElement("p");
    parrafo.textContent = texto;

    // Agregar el elemento párrafo al div
    document.getElementById("parrafo-a-copiar").appendChild(parrafo);

    document.getElementById("texto-usuario").value = "";
}


let boton = document.getElementById("miBoton");
boton.addEventListener("click", capturarTexto);
