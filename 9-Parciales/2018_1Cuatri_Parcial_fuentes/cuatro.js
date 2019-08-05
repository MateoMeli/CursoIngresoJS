function mostrar()
{
    var num1;
    var num2;

    var sumados = num1 + num2;

    num1 = parseInt(prompt("Ingrese un numero: "));
    while(isNaN(num1)){
        num1 = parseInt(prompt("Ingrese un numero valido"));
    }
    num2 = parseInt(prompt("Ingrese el numero siguiente: "));
    while(isNaN(num2)){
        num2 = parseInt(prompt("Ingrese un numero valido: "));
    }
    if(num1 == num2){
        alert (num1 + "" + num2);
    }
    if(num1>num2){
        alert(num1 - num2);
    }
    if(num1<num2){
        alert(num1 + num2);
    }
    if((num1 + num2)>10){
        alert("La suma es " + (num1 + num2) + " y supero el 10.");
    }


    // Pedir dos números y mostrar el resultado: 
    // Si son iguales los muestro concatenados. 
    // Si el primero es mayor, los resto,
    // de lo contrario los sumo. 
    // Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje 
    // "la suma es xxx y supero el 10"
}
