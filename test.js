function sumaJavascript(a, b) {
    return a + b;
}
function sumaNormal(a, b) {
    return a + b;
}
var sumaAnonima = function (a, b) {
    return a + b;
};
var sumaFlecha = function (a, b) {
    return a + b;
};
console.log("resultado de la suma sumaJavascript " + sumaJavascript(12, 34));
console.log("resultado de la suma sumaNormal " + sumaNormal(12, 34));
console.log("resultado de la suma sumaAnonima " + sumaAnonima(12, 34));
console.log("resultado de la suma sumaFlecha " + sumaFlecha(12, 34));
