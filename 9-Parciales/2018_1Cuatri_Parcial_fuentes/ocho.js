function mostrar() {
    var numero;
    var letra;
    var contadorcero = 0;
    var respuesta = "s";
    var contadorpares = 0;
    var contadorimpares = 0;
    var acumulador = 0;
    var contadorpositivos = 0;
    var acumuladornegativos = 0;
    var maximo;
    var minimo;
    var letramax;
    var letramin;
    var contador = 0;


    while (respuesta == "s") {
        numero = parseInt(prompt("Ingrese un numero entre -100 y 100:"));

        while (isNaN(numero) || numero < -100 || numero > 100) {
            numero = parseInt(prompt("Ingrese un numero valido:"));
        }
        if (numero % 2 == 0) {
            contadorpares++;

        }
        if (numero % 2 == 1) {
            contadorimpares++;
        }
        if (numero == 0) {
            contadorcero++;
        }
        letra = prompt("Ingrese una letra:");
        // while (letra != Number)
        // {
        //     letra = prompt("Ingrese una letra valida.");
        // }
        if (numero > 0) {
            acumulador = numero + acumulador
            contadorpositivos++;
        }
        if (numero < 0) {
            acumuladornegativos = acumuladornegativos + numero;

        }
        if(contador == 0)
        {
            maximo=numero;
            minimo=numero;
            letramax=letra;
            letramin=letra;}
        if(numero > maximo){
            maximo = numero;
            letramax = letra;
        }
        if(numero < minimo){
            minimo = numero;
            letramin = letra;
        }
        contador ++;

        respuesta = prompt("Quiere ingresar mas datos?");
    }
    document.write("La cantidad de pares es " + contadorpares + "<br>");

    document.write("La cantidad de impares es " + contadorimpares + "<br>");

    document.write("La cantidad de ceros es " + contadorcero + "<br>");

    document.write("El promedio de los positivos es " + acumulador / contadorpositivos + "<br>");

    document.write("La suma de los negativos es " + acumuladornegativos + "<br>");

    document.write("El numero maximo es " + maximo + " y la letra es " + letramax + "<br>");

    document.write("El numero minimo es " + minimo + " y la letra es " + letramin + "<br>");
}


