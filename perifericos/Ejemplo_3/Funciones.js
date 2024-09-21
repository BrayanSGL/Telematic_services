var btnSubir = document.getElementById("subir");
var btnBajar = document.getElementById("bajar");
var btnIzquierda = document.getElementById("izquierda");
var btnDerecha = document.getElementById("derecha");
var canvas = document.getElementById("canvas");

var positionX = 0;
var positionY = 0;

function dibujar(){
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(positionX, positionY, 50, 50);
}

btnSubir.addEventListener("click", function(){
    positionY -= 10;
    dibujar();
} );

btnBajar.addEventListener("click", function(){
    positionY += 10;
    dibujar();
} );

btnIzquierda.addEventListener("click", function(){
    positionX -= 10;
    dibujar();
} );

btnDerecha.addEventListener("click", function(){
    positionX += 10;
    dibujar();
} );