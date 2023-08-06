console.log("Ejercicio C");

var pasos = 1;
var gatos = 1;
var cantidadGatos = 10;
var cantidadPasos = 4;
var verPasos = "";
var gatoNegro = "";

while (pasos<=cantidadPasos) {
    verPasos = verPasos + "🐾";
    pasos++;
}
while (gatos<=cantidadGatos) {
    console.log("gato #"+gatos+":🐈"+ gatoNegro + verPasos);
    if (gatos%2==1) {
        gatoNegro="⬛";
    }
    else {
        gatoNegro="";
    }
    gatos++;
}