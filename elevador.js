var pisos = [5, 29, 13, 10];
var pisoActual = 4;
const pisosMap = [[5,2], [29,10], [13,1], [10,1], [1,3]];
var sentido = "Subiendo";
var cont = 0;

/*Funcion estEnPiso, compara el piso en el que se encuentra el elevador con el arreglo pisos
para saber si el elevador debe detenerse
*/
function estaEnPiso(array, piso){
    var tmp = false;
    array.forEach(element => {
        if(element == piso){
            tmp = true;
        };
    });

    return tmp;

}

/*Funcion quitarPiso, esta quita los pisos que el elevador ya visito del arreglo de pisos
*/
function quitarPiso(array, num){
    const index = array.indexOf(num);
    if (index > -1) {
    array.splice(index, 1);
    };
}

/*Funcion ingresarPiso, esta ingresa un nuevo piso al arreglo pisos para poder anadir paradas
mientras este funciona
*/
function ingresarPiso(array, piso){
    tmp = 0;
    array.forEach(element => {
        if(element[0]==piso){

            pisos.forEach(e => {
                if(element[1]!=e){
                    tmp++
                };
            });

            if(tmp == pisos.length){
                pisos.push(element[1]);
                console.log("piso ingresado "+element[1]);
            };

            tmp = 0;
        }
    });
}

/*recorrerEdificio esta funcion comienza el recorrido del elevador siguiendo ciertas instrucciones
dependiendo de si esta esta de bajada o de subida, seguira ejecutandose siempre y cuando haya pisos
por visitar pendientes en el arreglo pisos
*/
function recorrerEdificio() {
    while (pisos.length>0) {

        switch (sentido) {
            case "Subiendo":
                if (pisoActual>=30) {
                    sentido = "Bajando";
                    break;
                };
                console.log("Elevador en el piso "+pisoActual);
                console.log("Elevador subiendo");
                if(estaEnPiso(pisos, pisoActual)){
                    console.log("El elevador se detiene en el piso "+pisoActual+" ---> "+pisos);
                    ingresarPiso(pisosMap, pisoActual);
                    quitarPiso(pisos, pisoActual);
                    console.log(pisos);
                    pisoActual++;
                }else{
                    pisoActual++;
                };

                // console.log("Subiendo");
            break;

            case "Bajando":
                if (pisoActual<=1) {
                    sentido = "Subiendo";
                    break;
                };
                console.log("Elevador en el piso "+pisoActual);
                console.log("Elevador bajando");
                if(estaEnPiso(pisos, pisoActual)){
                    console.log("El elevador se detiene en el piso "+pisoActual);
                    ingresarPiso(pisosMap, pisoActual);
                    quitarPiso(pisos, pisoActual);
                    console.log(pisos);
                    pisoActual--;
                }else{
                    pisoActual--;
                };
            break;

            default:
                console.log("default");
            break;
        }

    }
}

recorrerEdificio();