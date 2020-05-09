
function sumaJavascript(a,b) {
    return a+b;
}
function sumaNormal(a:number, b:number): number {
    return a+b;
}

let sumaAnonima = function(a:number, b:number):number {
    return a+b;
}

let sumaFlecha = (a:number, b:number):number => {
    return a+b;
}

console.log("resultado de la suma sumaJavascript " + sumaJavascript(12,34));
console.log("resultado de la suma sumaNormal " + sumaNormal(12,34));
console.log("resultado de la suma sumaAnonima " + sumaAnonima(12,34));
console.log("resultado de la suma sumaFlecha " + sumaFlecha(12,34));