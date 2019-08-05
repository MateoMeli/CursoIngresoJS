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
        if(respuesta=="s")
        {
            maximo=minimo=numero;
            letramax=letramin=letra;
        }else if(numero);






        respuesta = prompt("Quiere ingresar mas datos?");
    }
    document.write("La cantidad de pares es " + contadorpares);

    document.write("La cantidad de impares es " + contadorimpares);

    document.write("La cantidad de ceros es " + contadorcero);

    document.write("El promedio de los positivos es " + acumulador / contadorpositivos);

    document.write("La suma de los negativos es " + acumuladornegativos);

    document.write("El numero maximo es " + maximo + " y la letra es " + letramax);

    document.write("El numero minimo es " + minimo + " y la letra es " + letramin);






































































}