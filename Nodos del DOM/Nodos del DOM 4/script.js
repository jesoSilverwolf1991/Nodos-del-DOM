function agregarElemento() {
   
    var miLista = document.getElementById("miLista");

   
    var nuevoElemento = document.createElement("li");

   
    var textoElemento = document.createTextNode("Elemento " + (miLista.childElementCount + 1));
    nuevoElemento.appendChild(textoElemento);

    
    miLista.appendChild(nuevoElemento);
}