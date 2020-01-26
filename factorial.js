'use strict'
window.addEventListener("load", () => {
    var factorialnro = document.querySelector("#factorialnro");
    var show = document.querySelector(".muestra");
    var box = document.querySelector(".box");
    box.style.display="block";
    show.style.display ="none";
    factorialnro.addEventListener('submit', () => {
    
function factorial()
{
    
    var fact=1;
    var numero= document.querySelector("#valor").value;
    for(var i=1; i<=numero ; i++)
    {
    fact*=i;
    }
    return fact;
}

var resultado= document.querySelector("#resultado span");
resultado.innerHTML=factorial();
show.style.display ="block";
box.style.display= "none";

});


});
