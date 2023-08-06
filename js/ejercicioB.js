console.log("Ejercicio B");

var pasos = 1;
var gatos = 1;
var cantidadGatos = 10;
var cantidadPasos = 4;
var verpasos = "";

while (pasos<=cantidadPasos) {
    verpasos = verpasos + "🐾";
    pasos++;
}
while (gatos<=cantidadGatos) {
    console.log("gato #" + gatos + ":🐈" + verpasos);
    gatos++;
}