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
    var contador=0;
    var menoscero;
    var contmenoscero=0;
    var contadorpeso=0;
    var acumuladorpeso=0;

    while (seguir == "s") {
        marca = prompt("Ingrese la marca del producto:");
        peso = parseInt(prompt("Ingrese el peso del producto (entre 1 y 100):"));
        while (isNaN(peso) || peso < 1 || peso > 100) {
            peso = parseInt(prompt("Ingrese un peso valido entre 1 y 100:"));
        }
        acumuladorpeso = acumuladorpeso + peso;
        contadorpeso++;
        if (contador == 0) {
            marcamax = marca;
            pesomax = peso;
            pesomin = peso;
        }
        if (peso > pesomax) {
            pesomax = peso;
            marcamax = marca;
        } 
        if (peso < pesomin) {
            pesomin = peso;
        }
        contador ++;
        temperatura = parseInt(prompt("Ingrese la temperatura de almacenamiento del producto:"));
        while (isNaN(temperatura) || temperatura < -30 || temperatura > 30) {
            temperatura = parseInt(prompt("Ingrese una temperatura valida entre -30 y 30:"));
        }
        temppares = temperatura % 2
        if (temppares == 0) {
            contpares++;
        }
        if(temperatura < 0){
            contmenoscero ++;
        }
        
        seguir = prompt("Quiere ingresar mas datos?");
    }
    document.write("pares"+contpares);
    document.write("marca del maximo"+marcamax);
    document.write("peso maximo"+pesomax);
    document.write("peso minimo"+pesomin);
    document.write("menos cero"+ contmenoscero);
    document.write("promedio pesos" + acumuladorpeso/contadorpeso);
    

}
