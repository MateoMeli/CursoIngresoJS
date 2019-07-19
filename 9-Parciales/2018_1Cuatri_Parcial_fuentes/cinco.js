function mostrar() {
    var planeta;
    var mensaje;

    planeta = prompt("Ingrese un Planeta:");

    // switch (planeta) {
    //     case "mercurio":
    //     case "venus":
    //         alert("Aca hace mas calor.");
    //         break;
    //     case "tierra":
    //         alert("Aca vivimos.");
    //         break;
    //     case "marte":
    //     case "jupiter":
    //     case "saturno":
    //     case "urano":
    //     case "neptuno":
    //         alert("Aca hace mas frio.");
    //         break;
    //     default:
    //         alert("Planeta invalido");

    // }
    switch (planeta) {
        case "mercurio":
        case "venus":
            mensaje = "Aca hace mas calor.";
            break;
        case "tierra":
            mensaje = "Aca vivimos.";
            break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
            mensaje = "Aca hace mas frio.";
            break;
        default:
            mensaje = "Planeta invalido";

    }
    alert(mensaje);


}
