//Seleccionar todos los elementos que quieres animar 
var elementos = document.querySelectorAll(".elemento"); 
 // Crear una función que se ejecute cuando el usuario haga scroll 
 function animarScroll() {  
    // Recorrer cada elemento   
    elementos.forEach(function(elemento) {    
         // Obtener la posición del elemento respecto al viewport     
        var posicion = elemento.getBoundingClientRect().top;     
        // Obtener la altura del viewport     
        var altura = window.innerHeight;        
        if (posicion < altura) {       elemento.classList.add("activo");         
    } else {       elemento.classList.remove("activo");     }   }); }  

window.addEventListener("scroll", animarScroll);