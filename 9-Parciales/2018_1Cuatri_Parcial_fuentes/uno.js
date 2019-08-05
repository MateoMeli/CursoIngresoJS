
function mostrar() {
    var ancho;
    var largo;

    ancho = parseInt(prompt("Ingrese el ancho:"))
    while(isNaN(ancho)){
        ancho = parseInt(prompt("Ingrese el ancho en numeros:"));
    }
    largo = parseInt(prompt("Ingrese el largo"));
    while(isNaN(largo)){
        largo = parseInt(prompt("Ingrese el largo en numeros"));
    }

    alert("El perimetro del rectangulo es: " + (largo * 2 + ancho * 2 ));
    

}
