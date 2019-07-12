function mostrar()
{	var nota;

	nota = Math.floor(Math.random() * 10 + 1 );
	nota = parseInt(nota);
	alert(nota);

	if(nota >= 9)
	{
		alert("Excelente");
	}
	else if (nota >= 4 && nota < 9)
	{
		alert("Aprobó");
	}
	else 
	{
		alert("Vamos, la próxima se puede.")
	}
	//Genero el número RANDOM entre 1 y 10 
	

}//FIN DE LA FUNCIÓN