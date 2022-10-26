formulario = document.getElementById("formulario");

function addElemento(texto){
    formulario = document.getElementById("formulario");
    h1 = document.createElement("h1");
    h1.innerHTML = texto;
    formulario.appendChild(h1);
}
