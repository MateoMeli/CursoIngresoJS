function mostrar()
{
    var precio;
    var descuento;

    precio = parseInt(prompt("Ingrese el precio del producto: "));
    descuento = parseInt(prompt("Ingrese el descuento a aplicar: "));

    document.getElementById("elPrecioFinal").value = ((precio - descuento) * precio /100);

}
