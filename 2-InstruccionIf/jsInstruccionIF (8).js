function mostrar()
{   var edad;
    var ecivil;

    edad = document.getElementById("edad").value;
    ecivil = document.getElementById("estadoCivil").value;
    edad = parseInt(edad);

    if(edad < 18 && ecivil != "Soltero")
    {}
    else if(ecivil == "Soltero" && edad > 18)
    {
        alert("Es soltero y no es menor.")
    }
//tomo la edad  

	


}//FIN DE LA FUNCIÓN