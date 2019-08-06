function mostrar()
{
    var animal;
    var peso;
    var temperatura;
    var seguir = "s";

    while(seguir == "s"){
        animal = prompt("Ingrese el animal:");
        peso = parseInt(prompt("Ingrese el peso entre 1 y 1000: " ));
        while(isNaN(peso) || peso < 1 || peso > 1000){
            peso = parseInt(prompt("Ingrese un peso valido:"));
        }
        temperatura = parseInt(prompt("Ingresa la temperatura del hábitat: "));
        while(isNaN(temperatura) || temperatura < 30 || temperatura > 30){
            temperatura = parseInt(prompt("Ingresa una temperatura valida: "));    
        }
        seguir = prompt("Quiere ingresar mas datos?");
    }
//     Realizar el algoritmo que permita ingresar el nombre de un animal del zoológico,
//      el peso el cual debe ser entre 1 y 1000 y la temperatura del hábitat
//       (entre -30 y 30) hasta que el usuario quiera e informar al terminar el
//        ingreso por document.write: 
// a) La cantidad de temperaturas pares. 
// b) El nombre y temperatura del animal más pesado 
// c) La cantidad de animales que viven a menos de 0 grados. 
// d) El promedio del peso de todos los animales.	
// f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.

}
