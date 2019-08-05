function mostrar()
{
    var notas;
    var sexo;
    var seguir = 0;
    var contnotas = 0;
    var contador = 0;
    var notamin;
    var sexomin;
    var cantvarones = 0;

    while(seguir < 5){
        notas = parseInt(prompt("Ingrese la nota: "));
        while(isNaN(notas) || notas < 1 || notas > 10){
            notas = parseInt(prompt("Ingrese un numero valido enter 1 y 10"));
        }
        sexo = prompt("Ingrese el sexo f o m:");
        while(sexo != "m" && sexo != "f"){
            sexo = prompt("Ingrese f o m: ");
        }
        contnotas = contnotas + notas;

        if(contador == 0){
            notamin = notas;
            sexomin = sexo;
        }
        if(notas < notamin){
            notamin = notas;
            sexomin = sexo;
        }
        if(notas >= 6 && sexo == "m"){
            cantvarones ++;
        }
        contador ++;
        seguir ++;
    }
    alert("El promedio total de las notas ingresadas es: " + contnotas / contador);
    alert("La nota mas baja es " + notamin + " y el sexo de esa nota es " + sexomin);
    alert("La cantidad de varones con nota 6 o mas es: " + cantvarones);


//     Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10)
// el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
// a) El promedio de las notas totales. 
// b) La nota más baja y el sexo de esa persona. 
// c) La cantidad de varones que su nota haya sido mayor o igual a 6

}
