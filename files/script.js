
enlaces=document.getElementsByClassName("menulink"); 
secciones=document.getElementsByTagName("section");



     for (let i = 0; i < enlaces.length; i++) {
        enlaces[i].addEventListener('click', function (event) 
        {event.preventDefault();ocultarMostrar(i)})
        
      }    

      function ocultarMostrar(enlace){
        if (!enlaces[enlace].classList.contains("activo")){
             for (let i = 0; i < enlaces.length; i++) {
                enlaces[i].classList.remove("activo");
                secciones[i].classList.remove("mostrar");
                secciones[i].classList.add("ocultar");}
             enlaces[enlace].classList.add("activo");
                          secciones[enlace].classList.add("mostrar")
            
         }


       
      }