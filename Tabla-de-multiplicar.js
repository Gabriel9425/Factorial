'use strict'
window.addEventListener("load", () => {
    var factorialnro = document.querySelector("#Numero2");
    var show = document.querySelector(".Muestra-Tabla");
    var box = document.querySelector(".box");
    var reseteo = document.querySelector("#reset");
    box.style.display = "block";
    show.style.display = "none";
    ///Realiza la tabla de multiplicar
    factorialnro.addEventListener('submit', () => {
        
        
        var numero =document.querySelector("#valor").value;
        
        
        var resultado = document.querySelector("#resultado-tabla span");
        resultado.innerHTML='';
        for(var i=1 ; i<=10 ; i++)
        {
            
            var mult = numero * i;

            if(numero<0)
            {
                resultado.innerHTML="ingrese un valor positivo";
            }
           else{
            resultado.innerHTML+= numero + " x "+ i + " = " + mult + "<br/>";}
        
        }
        
        show.style.display = "block";
        box.style.display = "none";
        
        
    });
    
    reseteo.addEventListener('click',()=>
    {
        var numero =document.querySelector("#valor").value='';
        box.style.display = "block";
        show.style.display = "none";
    });


});
