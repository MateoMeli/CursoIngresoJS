/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var numerouno;
    var numerodos;
    numerouno=document.getElementById("numeroUno").value;
    numerodos=document.getElementById("numeroDos").value;
    numerouno=parseInt (numerouno);
    numerodos=parseInt (numerodos); 
    alert("La suma es " + (numerouno + numerodos));  
	
}

function restar()
{   var numerouno;
    var numerodos;
    numerouno=document.getElementById("numeroUno").value;
    numerodos=document.getElementById("numeroDos").value;
    numerouno=parseInt (numerouno);
    numerodos=parseInt (numerodos); 
    alert("La resta es " + (numerouno - numerodos));  
	
}

function multiplicar()
{   var numerouno;
    var numerodos;
    numerouno=document.getElementById("numeroUno").value;
    numerodos=document.getElementById("numeroDos").value;
    numerouno=parseInt (numerouno);
    numerodos=parseInt (numerodos); 
    alert("La multiplicacion es " + (numerouno * numerodos));  
	
}

function dividir()
{   var numerouno;
    var numerodos;
    numerouno=document.getElementById("numeroUno").value;
    numerodos=document.getElementById("numeroDos").value;
    numerouno=parseInt (numerouno);
    numerodos=parseInt (numerodos); 
    alert("La division es " + (numerouno / numerodos)); 
	
}

