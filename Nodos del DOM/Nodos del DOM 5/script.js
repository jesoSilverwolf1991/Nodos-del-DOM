document.addEventListener('DOMContentLoaded', function () {
   
    document.getElementById('agregarComentarioBtn').addEventListener('click', function () {
      agregarComentario();
    });
  });
  
  function agregarComentario() {
  
    const fechaHoraActual = new Date();
    const fechaHoraString = fechaHoraActual.toLocaleString();
  
   
    const comentarioElement = document.createElement('div');
    comentarioElement.className = 'alert alert-info';
    comentarioElement.innerHTML = `<strong>Comentario:</strong> Se realizó una acción en ${fechaHoraString}`;
  
    
    const comentarioContainer = document.getElementById('comentarioContainer');
    comentarioContainer.appendChild(comentarioElement);
  }
  