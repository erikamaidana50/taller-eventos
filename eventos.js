const boton= document.getElementById('identificador');




boton.addEventListener ('click', function() {
    alert('Hola! soy el div');
}
);

const botonSaludar = document.querySelector('button');

botonSaludar.addEventListener('click', function(event) {
    event.stopPropagation(); 
    alert("Hola");
});