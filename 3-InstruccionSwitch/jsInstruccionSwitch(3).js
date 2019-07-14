function mostrar()
{
//tomo la edad  
    var mesDelAño = document.getElementById('mes').value;

    switch(mesDelAño)
    {
        case("Febrero"):
            alert("Este mes tiene menos de 29 dias.");
            break;
        default:
            alert("Este mes tiene 30 o mas diás.")
               
    }    

//alert (mesDelAño);
	
	


}//FIN DE LA FUNCIÓN