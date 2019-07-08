function mostrar()
{   var edad;
    var adolescente;

    edad = document.getElementById("edad").value;
    edad = parseInt(edad);
    adolescente = (edad >13) && (edad <=17); 

    if(adolescente)
    {
        alert("Adolescente");
    }

//tomo la edad  



}//FIN DE LA FUNCIÓN