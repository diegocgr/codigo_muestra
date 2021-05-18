$(document).ready(function(){
    $("#comentariosEstilo").click(mostrarComentarios);
    $("#comentariosCorteCabello").click(mostrarComentariosCC);

    $("#anadir").click(insertarTabla);
    $("#anadirCC").click(insertarTablaCC);
});

function mostrarComentarios(){
    // alert("mierda");
    $('#tablaEstilo').toggleClass('show');
    mostrarTabla();
    intervalo = setInterval(mostrarTabla, 10000);
}

function mostrarComentariosCC(){
    // alert("mierda");
    $('#tablaCorteCabello').toggleClass('show');
    mostrarTablaCC();
    intervaloCC = setInterval(mostrarTablaCC, 10000);
}

function insertarTabla(event){
    // var comentario = $('#comentario').val();
    // $('#contenidoTablaEstilo').html(comentario);
    // event.preventDefault();

    var nombre = $("#nombre").val();
    var comentario = $("#comentario").val();
    var fecha = establecerFecha();

    var a = false;
    var b = false;
    var c = false;
    var check = false;

    if(nombre === "" || comentario === ""){
        if(nombre === "" && comentario === ""){
            c = true;
        }else if(nombre === ""){
            a = true;
        }else if(comentario === ""){
            b = true;
        }
        check = false;
    }else{
        check = true;
    }

    if(check==false){
        $("#aviso").html("");
        $("#anadirEmoji").html("");
        $("#nombreEmoji").html("");
        $("#comentarioEmoji").html("");

        if(c==true){
            $("#aviso").html("No me das nada... &#128064;");
            $("#anadirEmoji").html("&#128064;");
        }else if(a==true){
            $("#aviso").html("¿Cómo te llamas? &#128123;");
            $("#nombreEmoji").html("&#128123;");
        }else if(b==true){
            $("#aviso").html("¿Y tu comentario? &#128561;");
            $("#comentarioEmoji").html("&#128561;");
        }
        // $('#aviso').emoticonize();
        $('#aviso').addClass("mostrar");

        event.preventDefault();
    }else{
        console.log(nombre + " " + comentario + " " + fecha);
    
        $.ajax({
            url: 'mainGentle.php',
            type: 'POST',
            data: {functionToCall: 'anadirComentario', nombre: nombre, comentario: comentario, fecha: fecha},
            success: function(data){
                console.log(data);
            },
            error: function(data){
                if (data.status == 403) {
                    console.log("ERROR 403 al insertar comentario");
                }
                // console.log(data);
            }
        })

        event.preventDefault();
        $("#aviso").html("");
        $("#anadirEmoji").html("");
        $("#nombreEmoji").html("");
        $("#comentarioEmoji").html("");
        $("#nombre").val("");
        $("#comentario").val("");
    }
}

function insertarTablaCC(event){
    // var comentario = $('#comentario').val();
    // $('#contenidoTablaEstilo').html(comentario);
    // event.preventDefault();

    var nombre = $("#nombreCC").val();
    var comentario = $("#comentarioCC").val();
    var fecha = establecerFecha();

    var a = false;
    var b = false;
    var c = false;
    var check = false;

    if(nombre === "" || comentario === ""){
        if(nombre === "" && comentario === ""){
            c = true;
        }else if(nombre === ""){
            a = true;
        }else if(comentario === ""){
            b = true;
        }
        check = false;
    }else{
        check = true;
    }

    if(check==false){
        $("#avisoCC").html("");
        $("#anadirEmojiCC").html("");
        $("#nombreEmojiCC").html("");
        $("#comentarioEmojiCC").html("");

        if(c==true){
            $("#avisoCC").html("No me das nada... &#128064;");
            $("#anadirEmojiCC").html("&#128064;");
        }else if(a==true){
            $("#avisoCC").html("¿Cómo te llamas? &#128123;");
            $("#nombreEmojiCC").html("&#128123;");
        }else if(b==true){
            $("#avisoCC").html("¿Y tu comentario? &#128561;");
            $("#comentarioEmojiCC").html("&#128561;");
        }
        // $('#aviso').emoticonize();
        $('#avisoCC').addClass("mostrar");

        event.preventDefault();
    }else{
        console.log(nombre + " " + comentario + " " + fecha);
    
        $.ajax({
            url: 'mainGentle.php',
            type: 'POST',
            data: {functionToCall: 'anadirComentarioCC', nombre: nombre, comentario: comentario, fecha: fecha},
            success: function(data){
                console.log(data);
            },
            error: function(data){
                if (data.status == 403) {
                    console.log("ERROR 403 al insertar comentario");
                }
                // console.log(data);
            }
        })

        event.preventDefault();
        $("#avisoCC").html("");
        $("#anadirEmojiCC").html("");
        $("#nombreEmojiCC").html("");
        $("#comentarioEmojiCC").html("");
        $("#nombreCC").val("");
        $("#comentarioCC").val("");
    }
}

function establecerFecha(){
    var d = new Date();
    var month = '' + (d.getMonth() + 1);
    var day = '' + d.getDate();
    var year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    var today = [year, month, day].join('-');
    return today;
}

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

// a and b are javascript Date objects
function dateDiffInDays(a, b) {
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

function mostrarTabla(){
    relleno = "";
    relleno+= '<table id="tablaFormada" class="table table-sm mt-2">'; 
    // relleno+= '<thead><tr> <th>Fecha</th> <th>Nombre</th> <th>Comentario</th> </tr></thead>';
    
    $.ajax({
        url: 'mainGentle.php',
        type: 'POST',
        dataType: 'JSON',
        data: {functionToCall: 'mostrarComentarios'},
        success: function(data){
            // console.log(data);

            for(var i=0; i<data.length; i++){
                // var id = data[i].id;
                var nombre = data[i].nombre;
                var comentario = data[i].comentario;
                var fecha = data[i].fecha;

                const a = new Date(fecha),
                    b = new Date(establecerFecha()),
                    difference = dateDiffInDays(a, b);

                relleno+= '<tr>';
                // relleno+= `<td>${id}</td>`;
                relleno+= `<td id="fechaID">Hace ${difference} días</td>`;
                relleno+= `<td id="nombreID"><strong>${nombre}</strong></td>`;
                relleno+= `<td id="auxID">comentó:</td>`;
                relleno+= `<td>${comentario}</td>`;
                relleno+= '</tr>';
            }

            relleno+= '</table>'; 
            $('#contenidoTablaEstilo').html(relleno);
        },
        error: function(data){
            if (data.status == 403) {
                console.log("ERROR 403 al mostrar comentario");
                clearInterval(intervalo);
            }
            // console.log(data);
        } 
    })
}

function mostrarTablaCC(){
    rellenoCC = "";
    rellenoCC+= '<table id="tablaFormada" class="table table-sm mt-2">'; 
    // relleno+= '<thead><tr> <th>Fecha</th> <th>Nombre</th> <th>Comentario</th> </tr></thead>';
    
    $.ajax({
        url: 'mainGentle.php',
        type: 'POST',
        dataType: 'JSON',
        data: {functionToCall: 'mostrarComentariosCC'},
        success: function(data){
            // console.log(data);

            for(var i=0; i<data.length; i++){
                // var id = data[i].id;
                var nombre = data[i].nombre;
                var comentario = data[i].comentario;
                var fecha = data[i].fecha;

                const a = new Date(fecha),
                    b = new Date(establecerFecha()),
                    difference = dateDiffInDays(a, b);

                rellenoCC+= '<tr>';
                // relleno+= `<td>${id}</td>`;
                rellenoCC+= `<td>Hace ${difference} días</td>`;
                rellenoCC+= `<td><strong>${nombre}</strong></td>`;
                rellenoCC+= `<td>comentó:</td>`;
                rellenoCC+= `<td>${comentario}</td>`;
                rellenoCC+= '</tr>';
            }

            rellenoCC+= '</table>'; 
            $('#contenidoTablaCorteCabello').html(rellenoCC);
        },
        error: function(data){
            if (data.status == 403) {
                console.log("ERROR 403 al mostrar comentario");
                clearInterval(intervaloCC);
            }
            // console.log(data);
        } 
    })
}