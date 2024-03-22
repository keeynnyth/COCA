jQuery(document).ready(listo);

function listo()
{
    jQuery(".hamb").click(function(e){
    e.preventDefault();   
        jQuery("header .container nav").toggleClass("open");

        jQuery(".hamb i").toggleClass("fa-times");


    });
}
const formulario  = document.querySelector("#form");
const nombre = document.getElementsById('nombre');
const email = document.getElementById('email');
const mensaje = document.getElementsByClassName ('mensaje');
const warnings = document.getElementsById('warnings');
const form =  document.getElementById('form');

formulario.addEventListener('submit', (event) => {
   event.preventDefault();
} );


