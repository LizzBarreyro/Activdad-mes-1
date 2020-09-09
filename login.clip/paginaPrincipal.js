var menu = document.getElementById('menu');
var altura = menu.offsetTop;
window.addEventListener('scroll' , function (){
    if (window.pageYOffset > altura)
    {
        menu.classList.add('fixed');
    }
    else
    {
        menu.classList.remove('fixed');

    }
    
}
)
var respuestaCorrecta = "calle";

function botonOk(){
    document.getElementById("respuesta").innerHTML="calle ";
    alert("GANASTE!")



    
}
document.getElementById("ok").onclick= function()
  {
    botonOk();
  }

function mostrarPistas(){
    document.getElementById("titulopistas").innerHTML="Estoy presente en muchos lugares ";
    


    


  }

  document.getElementById("botonpistas").onclick= function()
  {
    mostrarPistas();
  }

