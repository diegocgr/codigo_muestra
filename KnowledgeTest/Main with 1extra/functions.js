$(document).ready(function(){
    $("#anadir").click(insertarComentario);
    mostrarComentarios();
    intervalo = setInterval(mostrarComentarios, 10000);
    // $("#iconoWeb").click(mostrarComentarios);
    $("#anadirMovil").click(insertarComentarioMovil);
    mostrarComentariosMovil();
    intervaloMovil = setInterval(mostrarComentariosMovil, 10000);
});

function insertarComentario(event){
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
        // $("#nombre").val("");
        // $("#comentario").val("");
        // alert("Introduce datos");
    }else{
        console.log(nombre + " " + comentario + " " + fecha);
    
        $.ajax({
            url: 'main.php',
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

function mostrarComentarios(){
    relleno = "";
    relleno+= '<table id="tablaFormada" class="table table-sm">'; 
    // relleno+= '<thead><tr> <th>Fecha</th> <th>Nombre</th> <th>Comentario</th> </tr></thead>';
    
    $.ajax({
        url: 'main.php',
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
            $('#table').html(relleno);
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

// contador = 0;
function actulizarTabla(){
    mostrarComentarios();
}

// -------------------------------------------------------------------------------------------

const btn = document.getElementById('anadir');

btn.addEventListener('click', () => {
    var nombre = $("#nombre").val();
    var comentario = $("#comentario").val();
    var fecha = establecerFecha();

    var check = false;

    if(nombre === "" || comentario === ""){
        check = false;
    }else{
        check = true;
    }

    if(check==false){
    }else{
        const particles = [];
	const color = randomColor();
	
	const particle = document.createElement('span');
	particle.classList.add('particle', 'move');
	
	const { x, y } = randomLocation();
	particle.style.setProperty('--x', x);
	particle.style.setProperty('--y', y);
	particle.style.background = color;
	btn.style.background = color;
	
	btn.appendChild(particle);
	
	particles.push(particle);
	
	setTimeout(() => {
	
		for(let i=0; i<100; i++) {
			const innerP = document.createElement('span');
			innerP.classList.add('particle', 'move');
			innerP.style.transform = `translate(${x}, ${y})`;

			const xs = Math.random() * 200 - 100 + 'px';
			const ys = Math.random() * 200 - 100 + 'px';
			innerP.style.setProperty('--x', `calc(${x} + ${xs})`);
			innerP.style.setProperty('--y', `calc(${y} + ${ys})`);
			innerP.style.animationDuration = Math.random() * 300 + 200 + 'ms';
			innerP.style.background = color;
			
			btn.appendChild(innerP);
			particles.push(innerP)
		}
		
		setTimeout(() => {
			particles.forEach(particle => {
				particle.remove();
			})
		}, 1000)
	}, 1000);
    }
});

function randomLocation() {
	return {
		x: Math.random() * window.innerWidth - window.innerWidth / 2 + 'px',
		y: Math.random() * window.innerHeight - window.innerHeight / 2 + 'px',
	}
}

function randomColor() {
	return `hsl(${Math.floor(Math.random() * 361)}, 100%, 50%)`;
}

// -------------------------------------------------------------------------------------------

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

// a and b are javascript Date objects
function dateDiffInDays(a, b) {
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

//RECURSOS
// https://codepen.io/FlorinPop17/pen/abNVbOm
// https://www.tutorialrepublic.com/faq/how-to-check-for-an-empty-string-in-javascript.php
// https://stackoverflow.com/questions/21658542/how-to-turn-text-into-emoticons
// https://github.com/JangoSteve/jQuery-CSSEmoticons
// https://stackoverflow.com/questions/133051/what-is-the-difference-between-visibilityhidden-and-displaynone
// https://uigradients.com/#LoveCouple
// https://www.w3schools.com/charsets/ref_emoji.asp
// https://stackoverflow.com/questions/3224834/get-difference-between-2-dates-in-javascript
// https://www.geeksforgeeks.org/how-to-insert-spaces-tabs-in-text-using-html-css/
// https://www.transparenttextures.com/

//FUENTES
// https://www.reddit.com/r/web_design/comments/9hoyx5/which_font_youll_use_if_your_only_option_is_to/
// Montserrat
// Roboto

// -------------------------------------------------------------------------------------------

function insertarComentarioMovil(event){
    var nombre = $("#nombreMovil").val();
    var comentario = $("#comentarioMovil").val();
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
        $("#avisoMovil").html("");
        $("#anadirEmojiMovil").html("");
        $("#nombreEmojiMovil").html("");
        $("#comentarioEmojiMovil").html("");

        if(c==true){
            $("#avisoMovil").html("No me das nada... &#128064;");
            $("#anadirEmojiMovil").html("&#128064;");
        }else if(a==true){
            $("#avisoMovil").html("¿Cómo te llamas? &#128123;");
            $("#nombreEmojiMovil").html("&#128123;");
        }else if(b==true){
            $("#avisoMovil").html("¿Y tu comentario? &#128561;");
            $("#comentarioEmojiMovil").html("&#128561;");
        }
        // $('#aviso').emoticonize();
        $('#avisoMovil').addClass("mostrar");

        event.preventDefault();
        // $("#nombre").val("");
        // $("#comentario").val("");
        // alert("Introduce datos");
    }else{
        console.log(nombre + " " + comentario + " " + fecha);
    
        $.ajax({
            url: 'main.php',
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
        $("#avisoMovil").html("");
        $("#anadirEmojiMovil").html("");
        $("#nombreEmojiMovil").html("");
        $("#comentarioEmojiMovil").html("");
        $("#nombreMovil").val("");
        $("#comentarioMovil").val("");
    }
}

function mostrarComentariosMovil(){
    rellenoMovil = "";
    
    $.ajax({
        url: 'main.php',
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

                rellenoMovil+='<p class="cajaComentario">';
                rellenoMovil+=`<span>Hace ${difference} días ${nombre} comentó:</span><br>`;
                rellenoMovil+=`<span>${comentario}</span>`;
                rellenoMovil+='</p>';
            }
            $('#tableMovil').html(rellenoMovil);
        },
        error: function(data){
            if (data.status == 403) {
                console.log("ERROR 403 al mostrar comentario");
                clearInterval(intervaloMovil);
            }
            // console.log(data);
        }
    })
}