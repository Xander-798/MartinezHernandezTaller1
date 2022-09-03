
var tipoUSU, libroT, x;

x= 0;

function tiempo(dias){
    let now = new Date();
    
    let fecha;
    if (dias == 0) {
        let op = new Date();
        op.setDate(op.getDate());
        fecha = "Hoy mismo: " + op.toLocaleDateString();
    }else{
        now.setDate(now.getDate() + dias);
    
        fecha = now.toLocaleDateString();
        /*mes = now.getMonth();
        ania = now.getFullYear();
        dia = now.getDay();

        fecha = [dia, mes, ania];*/
    }
    

    return fecha;
}

/*function tabla(a, b, c){
    
    
    /*pantalla = document.getElementById('tabla');
    pantalla.innerHTML+="<table class='tabal'><td><th>Tipo de Usuario</th><th>Tipo de Libro</th><th>Fecha de devolución</th></td><br>";
    pantalla.innerHTML+="<td>"+ a +"</td><td>"+ b +"</td><td>"+ c +"</td>";
    pantalla.innerHTML+="</table>";
}*/


function fila(){
    libroT = document.getElementById('libro');
    tipoUSU = document.getElementById('usuario');

    libro = libroT.value;
    usu = tipoUSU.value;


    var titulo, tipo, salida, dia, cant;

    switch (libro) {
        case "ciencias":
            titulo = 'Ciencias y tecnología';
            dia = 3;
            break;
        case "tesis":
            titulo = 'Tesis';
            dia = 15;
            break;
        case "obras":
            titulo = 'Obras literarias';
            dia = 7;
            break;
        case "otro":
            titulo = 'Otro';
            dia = 2;
            break;
    
        default:
            break;
    }

    switch (usu) {
        case "estudiante":
            tipo = 'Estudiante';
            salida = 1;
            break;

        case "docente":
            tipo = 'Docente';
            salida = 2;
            
            break;

        case "sin":
            tipo = 'Sin carnét';
            salida = 0;

            break;
        default:
            break;
    }

    cant = salida * dia;
    
    var fech = new Array;
    fech = tiempo(cant);
    //alert(tipo + "  - " + titulo + " " + fech);
    
    pantalla = document.getElementById('tabla');
    var table = document.getElementsByTagName('table');
    
    
    if(x == 0){
    
    let table = document.createElement('table');
    let header = document.createElement('thead');
    let body = document.createElement('tr');

        pantalla.appendChild(table);
    
        table.appendChild(body);

    
        table.appendChild(header);
        header.innerHTML = "<td>Tipo de Usuario</td><td>Tipo de Libro</td><td>Fecha de devolución</td>"; 
        body.innerHTML += "<td>"+ tipo +"</td><td>"+ titulo +"</td><td>"+ fech +"</td>";
        x++;
    }else{
        let body = document.createElement('tr');
        table[0].appendChild(body);
        body.innerHTML += "<td>"+ tipo +"</td><td>"+ titulo +"</td><td>"+ fech +"</td>";
    }
}


