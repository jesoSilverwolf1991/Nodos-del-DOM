
function agregarElemento() {
    
    var nuevoParrafo = document.createElement("p");

  
    nuevoParrafo.textContent = "¡Nuevo párrafo agregado dinámicamente!";

    
    var contenedor = document.getElementById("contenedor");

   
    contenedor.appendChild(nuevoParrafo);
}


function eliminarElemento() {
   
    var contenedor = document.getElementById("contenedor");

    
    var ultimoElemento = contenedor.lastElementChild;

   
    if (ultimoElemento) {
        
        contenedor.removeChild(ultimoElemento);
    }
}
