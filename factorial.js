'use strict'
window.addEventListener("load", () => {
    var factorialnro = document.querySelector("#factorialnro");
    var show = document.querySelector(".muestra");
    var box = document.querySelector(".box");
    var reseteo = document.querySelector("#reset");
    box.style.display = "block";
    show.style.display = "none";
    factorialnro.addEventListener('submit', () => {
        
        
        var numero =document.querySelector("#valor").value;

        function factorial(number) {

            var fact = 1;

            for (var i = 1; i <= number; i++) {
                fact *= i;
            }
            return fact;
        }

        var resultado = document.querySelector("#resultado span");
        resultado.innerHTML = factorial(numero);
        show.style.display = "block";
        box.style.display = "none";
        numero='';
        
        
    });
    
    reseteo.addEventListener('click',()=>
    {
        var numero =document.querySelector("#valor").value='';
        box.style.display = "block";
        show.style.display = "none";
    });


});
