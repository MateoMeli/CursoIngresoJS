function mostrar()
{   var edad;
    var adolescente;
    var resultado;

    edad = document.getElementById("edad").value;
    edad = parseInt(edad);
    adolescente = (edad >13) && (edad <=17);
    resultado =! adolescente;

    if(resultado)
    {
        alert("No es adolescente")
    }
//tomo la edad  


}//FIN DE LA FUNCIÓN