function mostrar() {
    var nota;
    var sexo;
    var seguir = 0;
    var acunota = 0;
    var cantnotas = 0;
    var sexmin;
    var notamin;
    var contvarones = 0;

    while (seguir < 5) {
        
        nota = parseInt(prompt("Ingrese la nota:"));
        while (isNaN(nota) || nota < 1 || nota > 10) {
            nota = parseInt(prompt("Ingrese una nota valida entre 1 y 10:"));
        
        }
        acunota = acunota + nota;
        cantnotas ++;
        
        sexo = prompt("Ingrese f o m:");
        while (sexo != "m" && sexo != "f") {
            sexo = prompt("Ingrese un sexo valido f o m:");
        
        }
        if (seguir == 0) {
            notamin = nota;
            sexmin = sexo;
        }
        if (nota < notamin) {
            notamin = nota;
            sexmin = sexo;
        }
        if(sexo = "m" && nota >= 6){
            contvarones ++;
        }
        
    
        seguir ++;
    }

    alert("El promedio total de las notas es: " + acunota / cantnotas);
    alert("La nota minima es: " + notamin + " y el sexo es: " + sexmin);
    alert("La cantidad de varones cuya nota es mayor o igual a 6 es: " + contvarones);



    //     Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
    //     a) El promedio de las notas totales. 
    //     b) La nota más baja y el sexo de esa persona. 
    //     c) La cantidad de varones que su nota haya sido mayor o igual a 6.

}
