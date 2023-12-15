document.addEventListener('DOMContentLoaded', function () {
    
    document.getElementById('cambiarEstiloBtn').addEventListener('click', function () {
      cambiarEstilo();
    });
  });
  
  function cambiarEstilo() {
 
    const elemento = document.getElementById('elementoCambiante');
  
   
    const colores = ['lightblue', 'lightcoral', 'lightgreen', 'lightgoldenrodyellow','#b14fe4'];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
  
    elemento.style.backgroundColor = colorAleatorio;
  }