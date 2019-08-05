function mostrar()
{
    var numero;
    var letra;
    var seguir = "s";
    var numpares = 0;
    var numimpares = 0;
    var cantceros = 0;
    var positivos = 0;
    var contpositivos = 0;
    var negativos = 0;
    var contnegativos = 0;
    var nummax;
    var nummin;
    var letramax;
    var letramin;
    var contador = 0;


    while(seguir == "s"){
        numero = parseInt(prompt("Ingresar un numero entre -100 y 100: "));
        while(isNaN(numero) || numero < -100 || numero > 100){
            numero = parseInt(prompt("Ingresar un numero valido entre -100 y 100: "));
        }
        if((numero % 2) == 0){
            numpares ++;
        }else{
            numimpares ++;
        }
        if(numero == 0){
            cantceros ++;
        }
        if(numero >= 0){
            positivos = positivos + numero;
            contpositivos ++;
        }           
        if(numero < 0){
            negativos = negativos + numero;
            contnegativos ++;
        }
        letra = prompt("Ingresar una letra");
        if (contador == 0){
            nummax = numero;
            nummin = numero;
            letramax = letra;
            letramin = letra;
        }
        if(numero < nummin){
            nummin = numero;
            letramin = letra;
        }
        if(numero > nummax){
            nummax = numero;
            letramax = letra;
        }
        contador ++;
        
        seguir = prompt("Quiere ingresar mas datos?");

    }
    document.write("La cantidad de numeros pares es: " + numpares + "<br>" );
    document.write("La cantidad de numeros impares es: " + numimpares + "<br>" );
    document.write("La cantidad de ceros es: " + cantceros + "<br>" );
    document.write("El promedio de los numeros positivos ingresados es: " + positivos/contpositivos + "<br>" );
    document.write("La suma de los numeros negativos ingresados es: " + negativos/contnegativos + "<br>" );
    document.write("El numero maximo es: " + nummax + " y su letra es: " + letramax + "<br>");
    document.write("El numero minimo es: " + nummin + " y su letra es: " + letramin + "<br>");
    



// f) El número y la letra del máximo y el mínimo.

}

