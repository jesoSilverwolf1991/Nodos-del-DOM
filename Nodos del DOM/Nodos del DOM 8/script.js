

document.addEventListener('DOMContentLoaded', function () {
    const formTarea = document.getElementById('formTarea');
    const inputTarea = document.getElementById('inputTarea');
    const listaTareas = document.getElementById('listaTareas');
  
    formTarea.addEventListener('submit', function (event) {
      event.preventDefault();
      agregarTarea();
    });
  
    listaTareas.addEventListener('click', function (event) {
      const elementoClicado = event.target;
  
      if (elementoClicado.tagName === 'LI') {
        toggleCompletado(elementoClicado);
      } else if (elementoClicado.classList.contains('eliminar-tarea')) {
        eliminarTarea(elementoClicado.parentElement);
      }
    });
  
    function agregarTarea() {
      const tareaTexto = inputTarea.value.trim();
  
      if (tareaTexto !== '') {
        const nuevaTarea = document.createElement('li');
        nuevaTarea.className = 'list-group-item';
        nuevaTarea.innerHTML = `
          <span>${tareaTexto}</span>
          <button type="button" class="btn btn-success float-right mr-2">&#10003;</button>
          <button type="button" class="btn btn-danger float-right eliminar-tarea">&#10007;</button>
        `;
  
        listaTareas.appendChild(nuevaTarea);
        inputTarea.value = '';
      }
    }
  
    function toggleCompletado(elemento) {
      elemento.classList.toggle('completada');
    }
  
    function eliminarTarea(elemento) {
      elemento.remove();
    }
  });
  