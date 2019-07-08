function mostrar()
{   var edad;
    var ecivil;

    edad = document.getElementById("edad").value;
    ecivil = document.getElementById("estadoCivil").value;
    edad = parseInt(edad);

    if(edad <= 18 && ecivil != "Soltero")
    {
        alert("Es muy pequeno para no estar soltero.")
    }
//tomo la edad  

	


}//FIN DE LA FUNCIÓN