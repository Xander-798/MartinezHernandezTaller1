var tipoUSU;
var prestamoT;
var libroT;
var fechaEntrega;
var salida;

function tiempoDevolucion(){
    let date = new Date();
    let now = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
    let fechaPrestada = now;
    alert("La fecha en que hizo el prestamo fue el " + fechaPrestada);
}

do {
    alert("Libros para todos - Prestamos");

    tipoUSU=prompt("Digite su tipo de usuario: DOCENTE  - ESTUDIANTE - OTRO");
    if(tipoUSU=="Estudiante" || tipoUSU=="estudiante" || tipoUSU=="ESTUDIANTE"){
        libroT=prompt("Digite el tipo de libro: Ciencias Basicas y Tecnologia   -  Tesis   -   Obras Literarias   -  Otros");
            if(libroT == "Ciencias Basicas y Tecnologia" || libroT == "ciencias básicas y tecnología" || libroT == "ciencias basicas y tecnologia" ){
                prestamoT = 3;
                alert("Su límite para tener el libro  es de 3 dias");
                tiempoDevolucion();
            }
            else{
                if(libroT == "Tesis" || libroT == "TESIS" || libroT == "tesis" ){
                    prestamoT = 15;
                    alert("Su límite para tener el libro  es de 15 dias");
                    tiempoDevolucion();
                }else{
                    if(libroT == "Obras Literarias" || libroT == "obras Literarias" || libroT == "obras literarias" ){
                        prestamoT = 7;
                        tiempoDevolucion();
                    }else{
                        if(libroT == "Otros" || libroT == "OTROS" || libroT == "otros" ){
                            prestamoT = 2;
                            tiempoDevolucion();
                        }else{
                            alert("Opción no valida");
                        }
                    }
                }
            }
    }else{
        if(tipoUSU=="Docente" || tipoUSU=="docente" || tipoUSU=="DOCENTE"){
            libroT=prompt("Digite el tipo de libro que desea: Ciencias Basicas y Tecnologia   -  Tesis   -   Obras Literarias   -  Otros");
                if(libroT == "Ciencias Basicas y Tecnologia" || libroT == "ciencias básicas y tecnología" || libroT == "ciencias basicas y tecnologia" ){
                    prestamoT = 6;
                    alert("Su límite para tener el libro  es de 6 dias");
                    tiempoDevolucion();
                }
                else{
                    if(libroT == "Tesis" || libroT == "TESIS" || libroT == "tesis" ){
                        prestamoT = 30;
                        alert("Su límite para tener el libro  es de 30 dias");
                        tiempoDevolucion();
                    }else{
                        if(libroT == "Obras Literarias" || libroT == "obras Literarias" || libroT == "obras literarias" ){
                            prestamoT = 14;
                            alert("Su límite para tener el libro  es de 14 dias");
                            tiempoDevolucion();
                        }else{
                            if(libroT == "Otros" || libroT == "OTROS" || libroT == "otros" ){
                                prestamoT = 4;
                                alert("Su límite para tener el libro  es de 4 dias");
                                tiempoDevolucion();
                            }else{
                                alert("Opcion no valida");
                            }
                        }
                    }
                }
        }else{
            if(tipoUSU=="Otro" || tipoUSU=="otro" || tipoUSU=="OTRO"){
                libroT=prompt("Digite el tipo de libro que desea: Ciencias Basicas y Tecnologia   -  Tesis   -   Obras Literarias   -  Otros");
                    if(libroT == "Ciencias Basicas y Tecnologia" || libroT == "ciencias básicas y tecnología" || libroT == "ciencias basicas y tecnologia" ){
                        prestamoT = 1;
                        alert("Tiene que entregar el libro hoy mismo");
                        tiempoDevolucion();
                    }
                    else{
                        if(libroT == "Tesis" || libroT == "TESIS" || libroT == "tesis" ){
                            prestamoT = 1;
                            alert("Tiene que entregar el libro hoy mismo");
                            tiempoDevolucion();
                        }else{
                            if(libroT == "Obras Literarias" || libroT == "obras Literarias" || libroT == "obras literarias" ){
                                prestamoT = 1;
                                alert("Tiene que entregar el libro hoy mismo");
                                tiempoDevolucion();
                            }else{
                                if(libroT == "Otros" || libroT == "OTROS" || libroT == "otros" ){
                                    prestamoT = 1;
                                    alert("Tiene que entregar el libro hoy mismo");
                                    tiempoDevolucion();
                                }else{
                                    alert("Opción no valida");
                                }
                            }
                        }
                    }
            }else{
                alert("Opción no valida");
            }
        }
    }

    var respuesta = prompt("Desea volverlo a hacer? S/N");
    if(respuesta == "S" || respuesta == "s"){
        salida = true;
    }else{
        salida = false;
    }
} while (salida == true);






