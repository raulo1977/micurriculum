
enlaces=document.getElementsByClassName("menulink"); 



     for (let i = 0; i < enlaces.length; i++) {
        enlaces[i].addEventListener('click', function (event) 
        {event.preventDefault();ocultarMostrar(i)})
        
      }    

      function ocultarMostrar(enlace){
        if (!enlaces[enlace].classList.contains("activo")){
             for (let i = 0; i < enlaces.length; i++) {enlaces[i].classList.remove("activo")}
             enlaces[enlace].classList.add("activo")
            
         }


       
      }