function mostrar()
{   var edad;

    edad = document.getElementById("edad").value;
    edad = parseInt(edad);


    if(edad > 18)
    {
        alert("Mayor");
    }
    else if(edad > 13 && edad <= 18)
    {
        alert("Adolescente");
    }
    else
    
        alert("Menor");
    
    
//tomo la edad  




}//FIN DE LA FUNCIÓN