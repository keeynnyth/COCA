jQuery(document).ready(listo);

function listo()
{
    jQuery(".hamb").click(function(e){
    e.preventDefault();   
        jQuery("header .container nav").toggleClass("open");

        jQuery(".hamb i").toggleClass("fa-times");


    });
}


function alerta(){
    const nom = document.getElementById('nombre').value;
        
    alert(nom+" su informacion ha sido enviada correctamente ");
    form.reset();  //limpia los campos del formulario una vez que se envía el mensaje de correo
}

formu = document.getElementById('form');

formu.reset;




