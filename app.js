document.addEventListener('DOMContentLoaded' , () => {

    const contenedor=document.querySelector('.contenedor');
    const suelo = document.querySelector('.suelo');
    const dino = document.querySelector('.dino');
   
    var posicionSuelo = 0;
    var estaSaltando = false;
   
    dino.classList.add('dino-corriendo');


    function desplazamiento(){
        let posicionSuelo = 0;
        let vX = setInterval(function(){
            posicionSuelo += 4;

            if(posicionSuelo >900){
                posicionSuelo = 0;
            }

            suelo.style.left = -posicionSuelo + "px";



            var estiloDino = getComputedStyle(dino);
            var dinoY = parseFloat(estiloDino.bottom.replace("px", ""));
    
    
            if (dinoY === 0){
                dino.classList.remove('dinosaltando');
                estaSaltando = false;  
            }
    
    

        },20);
    
    };

    

    function addCaptus(){

        let randomTime = Math.random() * 4000;
        let posicionCaptus = 1000;
        const captus = document.createElement('div');
        captus.classList.add('captus');
        
        contenedor.appendChild(captus);
        captus.style.left = posicionCaptus + "px";
        

        let idTime= setInterval(function(){
        

            if (posicionCaptus <-60) {
                clearInterval(idTime);
                contenedor.removeChild(captus);
                
            }

            posicionCaptus -=4;
            captus.style.left = posicionCaptus + "px";
           
        }, 20);

        setTimeout(addCaptus, randomTime);

        if (randomTime <200) {
            randomTime=800;
        }

     
      
    }


    function saltar(){
        
            dino.classList.add('dinosaltando');
            setTimeout(function(){
                dino.classList.remove('dinosaltando');
            }, 700);
           

    };


    function control(e){
        if (e.keyCode === 32) { 
           saltar();
        }
    };
    
    // agrego el evento al document
    document.addEventListener('keydown', control); 
    

    addCaptus();
    
    desplazamiento();
   


});

