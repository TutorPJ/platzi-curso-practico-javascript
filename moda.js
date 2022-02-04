/*
const lista1 = [1 , 2 , 3 , 1 , 2 , 3 , 4 , 2 , 2 , 2 , 1];
const lista1Count = {}
lista1.map(
    function (elemento){
        if (lista1Count[elemento]){
            lista1Count[elemento] += 1;
        } else {
            lista1Count[elemento] = 1;
        }        
    }
);

const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA , elementoB) {
        return elementoA[1] - elementoB[1];
}
);

const moda = lista1Array[lista1Array.length-1];
*/
/*
function calcularModa(lista1)
{
    const lista1Count = {}

    lista1.map(
        function (elemento){
            if (lista1Count[elemento]){
                lista1Count[elemento] += 1;
            } else {
             lista1Count[elemento] = 1;
            }        
        }
    );

    const lista1Array = Object.entries(lista1Count).sort(
        function (elementoA , elementoB) {
        return elementoA[1] - elementoB[1];
        }
    );

    const moda = lista1Array[lista1Array.length-1];

    return moda;
}
*/

//const set = [4 , 2 , 3 , 3 , 2 , 1 , 1 , 2 , 3 , 2 , 3];

function calculateMode(set){
const values = [];
const frequencies = [];
let times = 0;
const mode =[];

for (let i = 0 ; i < set.length ; i++){
    if (!values.includes(set[i])){
        values.push(set[i]);}
    }

for (let i = 0 ; i < values.length ; i++){
    function addFrequency(frequency){
    return frequency === values[i];
    }
    frequencies.push(set.filter(addFrequency).length);
    if ((set.filter(addFrequency).length) > times) {
        times = set.filter(addFrequency).length;}
}

for (let i = 0 ; i < frequencies.length ; i++){
    if (times === frequencies[i]){
    mode.push(i); }    
}

for ( let i = 0 ; i < mode.length ; i++){
    console.log("La moda es " +values [mode[i]]+ " con una frecuencia de " + times + " veces.");
    }
}
