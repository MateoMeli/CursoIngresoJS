function mostrar() {
    var dia;
    var mensaje;

    dia = prompt("Ingrese un dia:");

    // switch(dia)
    // {
    //     case "sabado":
    //     case "domingo":
    //         alert("Buen finde");
    //         break;
    //     case "lunes":
    //     case "martes":
    //     case "miercoles":
    //     case "jueves":
    //     case "viernes":
    //         alert("A trabajar");
    //         break;
    //     default:
    //         alert("Dia invalido.");
    //} esto es ineficiente por los tres alert

    switch (dia) {
        case "sabado":
        case "domingo":
            mensaje = "Buen finde";
            break;
        case "lunes":
        case "martes":
        case "miercoles":
        case "jueves":
        case "viernes":
            mensaje = "A trabajar";
            break;
        default:
            mensaje = "Dia invalido.";
    }
    alert(mensaje);
// manera mucho mas eficiente. repetir variables no recursos y funciones

}
