var Gtabla = [];

function takeValue(x) {
    console.log(x)
	document.getElementById('Result').innerHTML += x;
}

function limpiar() {
	document.getElementById('Result').innerHTML = "";
}

function calcular() {
	var result = eval(document.getElementById('Result').innerHTML);
	document.getElementById('Result').innerHTML = result;
}

function guardar()
{

   var result = eval(document.getElementById('Result').innerHTML); 

    let calculo = {
        
        operacion: document.getElementById('Result').innerHTML,
        resultado: document.getElementById('Result').innerHTML = result
    }
    Gtabla.push(calculo)
    localStorage.setItem("operacion",JSON.stringify(Gtabla))
    
}



var cero = document.getElementById('cero');
var uno = document.getElementById('uno');
var dos = document.getElementById('dos');
var tres = document.getElementById('tres');
var cuatro = document.getElementById('cuatro');
var cinco = document.getElementById('cinco');
var seis = document.getElementById('seis');
var siete = document.getElementById('siete');
var ocho = document.getElementById('ocho');
var nueve = document.getElementById('nueve');

var sumar = document.getElementById('sumar');
var restar = document.getElementById('restar');
var dividir = document.getElementById('dividir');
var multiplicar = document.getElementById('multiplicar');
var equal = document.getElementById('equal');
var eliminar = document.getElementById('eliminar');
var punto = document.getElementById('punto');




cero.addEventListener("click", function(){
    takeValue(0);

})
uno.addEventListener("click", function(){
    takeValue(1);

})
dos.addEventListener("click", function(){
    takeValue(2);
})
tres.addEventListener("click", function(){
    takeValue(3);
})
cuatro.addEventListener("click", function(){
    takeValue(4);
})
cinco.addEventListener("click", function(){
    takeValue(5);
})
seis.addEventListener("click", function(){
    takeValue(6);
})
siete.addEventListener("click", function(){
    takeValue(7);
})
ocho.addEventListener("click", function(){
    takeValue(8);
})
nueve.addEventListener("click", function(){
    takeValue(9);
})
sumar.addEventListener("click", function(){
    takeValue("+");
})
restar.addEventListener("click", function(){
    takeValue("-");
})
multiplicar.addEventListener("click", function(){
    takeValue("*");
})
dividir.addEventListener("click", function(){
    takeValue("/");
})
punto.addEventListener("click", function(){
    takeValue(".");
})


igual.addEventListener("click", function(){
    guardar();
    calcular();
    
})

eliminar.addEventListener("click", function(){
    limpiar()
})