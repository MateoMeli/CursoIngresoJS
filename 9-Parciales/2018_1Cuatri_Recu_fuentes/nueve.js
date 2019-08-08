function mostrar() {
    var animal;
    var peso;
    var temperatura;
    var seguir = "s";
    var contpares = 0;
    var animalmax;
    var tempmax;
    var pesomax;
    var contador = 0;
    var tempcero = 0;
    var acumpeso = 0;
    var pesomaxmax;
    var pesominmin;

    while (seguir == "s") {
        animal = prompt("Ingrese el animal:");

        peso = parseInt(prompt("Ingrese el peso entre 1 y 1000: "));
        while (isNaN(peso) || peso < 1 || peso > 1000) {
            peso = parseInt(prompt("Ingrese un peso valido:"));
        }

        temperatura = parseInt(prompt("Ingresa la temperatura del hábitat: "));
        while (isNaN(temperatura) || temperatura < -30 || temperatura > 30) {
            temperatura = parseInt(prompt("Ingresa una temperatura valida: "));
        }

        if((temperatura % 2) == 0){
            contpares ++;
        }

        if(contador == 0){
            animalmax = animal;
            tempmax = temperatura;
            pesomax = peso;
        }
        if(peso > pesomax){
            animalmax = animal;
            tempmax = temperatura;
            pesomax = peso;
        }
        if(temperatura < 0){
            tempcero ++;
            pesomaxmax = peso;
            pesominmin = peso;

        }
        if(temperatura < 0 && peso < pesominmin){
            pesominmin = peso;
        }
        if(temperatura < 0 && peso > pesomaxmax){
            pesomaxmax = peso;
        }

        acumpeso = peso + acumpeso;
        contador ++;
        seguir = prompt("Quiere ingresar mas datos?");
    }
    document.write("La cantidad de numeros pares ingresados fue: " + contpares + "<br>");
    document.write("El nombre del animal mas pesado es: " + animalmax + " y la temperatura de su habitat es de: " + tempmax + "°C." + "<br>");
    document.write("La cantidad de animales que viven a menos de 0°C es: " + tempcero + "<br>");
    document.write("El promedio de todos los pesos ingresados es: " + acumpeso/contador + "<br>");
    document.write("El peso maximo de los animales que viven a menos de 0°C es: " + pesomaxmax + " y el minimo: " + pesominmin);
    
    // f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.

}
