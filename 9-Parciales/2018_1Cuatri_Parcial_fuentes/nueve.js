function mostrar() {
    var marca;
    var peso;
    var temperatura;
    var seguir = "s";
    var contpares = 0;
    var temppares;
    var pesomax;
    var pesomin;
    var marcamax;

    while (seguir == "s") {
        marca == prompt("Ingrese la marca del producto:");
        peso = parseInt(prompt("Ingrese el peso del producto (entre 1 y 100):"));
        while (isNaN(peso) || peso < 1 || peso > 100) {
            peso = parseInt(prompt("Ingrese un peso valido entre 1 y 100:"));
            if(seguir == "s"){
                pesomax = peso;
                pesomin = peso;
                marcamax == marca;
            }
            if (peso > pesomax){
                pesomax = peso;
                marcamax == marca;
            } if (peso < pesomin){
                pesomin = peso;
            }
        }
        
        temperatura = parseInt(prompt("Ingrese la temperatura de almacenamiento del producto:"));
        while (isNaN(temperatura) || temperatura < -30 || temperatura > 30) {
            temperatura = parseInt(prompt("Ingrese una temperatura valida entre -30 y 30:"));
        }
        temppares = temperatura % 2
            if (temppares == 0) {
                contpares++;
            }

        seguir = prompt("Quiere ingresar mas datos?");
    }
    //     Bienvenidos. 
    // Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar), 
    // la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
    // a) La cantidad de temperaturas pares. 
    // b) La marca del producto más pesado 
    // c) La cantidad de productos que se conservan a menos de 0 grados. 
    // d) El promedio del peso de todos los productos.	
    // f) El peso máximo y el mínimo.
    console.log(contpares);
    console.log(marcamax);

}
