// Este es el código del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado (lado) {
    return lado * 4;
}
//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado (lado) {
    return lado * lado;
}
//console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

// Este es el código del triángulo
console.group("Triangulos");

/*const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log("Los lados del triángulo miden: " + ladoTriangulo1 + "cm," + ladoTriangulo2 + "cm," + baseTriangulo + "cm" );

console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");*/

function perimetroTriangulo (lado1, lado2, base){
    return parseInt(lado1) + parseInt(lado2) + parseInt(base);
}
//console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo (base, altura){
    return base * altura/2;
}
//console.log("El área del triángulo es: " + areaTriangulo + "cm^2");
function alturaTrianguloIsosceles (lado) {
    return Math.sqrt(3 * ((lado * lado) / 4));
}

console.groupEnd();

// Este es el código del círculo
console.group("Círculos");

//Radio
//const radioCirculo = 4;
//console.log("El radio del círculo es: " + radioCirculo + "cm");

//Diámetro
function diametroCirculo (radio) {
    return radio * 2;
}
//console.log("El diámetro del círculo es: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
console.log("PI es: " + Math.PI);

//Circunferencia
function perimetroCirculo(radio) {
    //const diametro = diametroCirculo(radio);
    //return diametro * PI;
    return radio * 2 * PI;
}

//console.log("El perímetro del círculo es: " + perimetroCirculo + "cm");

//Area
function areaCirculo (radioCirculo) {
    return (radioCirculo * radioCirculo) * PI;
}

//console.log("El área del círculo es: " + areaCirculo + "cm^2");
console.groupEnd();

//Aquí interactuamos con el HTML
function calcularPerimetroCuadrado (){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado (){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = areaCuadrado(value);
    alert(perimetro);
}
function calcularPerimetroTriangulo (){
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = input1.value;
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = input2.value;
    const input3 = document.getElementById("InputTriangulo3");
    const value3 = input3.value;
    const perimetro1 = perimetroTriangulo(value1, value2, value3);
    alert(perimetro1);
    console.log(perimetro1);
}
function calcularAreaTriangulo (){
    const input1 = document.getElementById("InputTriangulo4");
    const value1 = input1.value;
    const input2 = document.getElementById("InputTriangulo5");
    const value2 = input2.value;
    const area = areaTriangulo(value1, value2);
    alert(area);
}
function calcularAlturaTrianguloIsosceles (){
    const input1 = document.getElementById("InputTriangulo6");
    const value1 = input1.value;
    const altura = alturaTrianguloIsosceles(value1);
    alert(altura);
}
function calcularPerimetroCirculo (){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calcularAreaCirculo (){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
}