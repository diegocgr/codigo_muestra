<?php

date_default_timezone_set('Europe/Madrid');

function conectarDB(){

	// $con = mysqli_connect('localhost', 'guerrare_root', 'uxZlqOt%W-!,', 'guerrare_abnorm');
    $con = mysqli_connect('localhost', 'root', 'root', 'abnorm');
	mysqli_set_charset($con, "utf8");
	if(!$con){
	    die("No se ha podido realizar la conexión. ERROR:" . mysqli_connect_error());
	}else{
        //echo "Conexión establecida";
    }

	return $con;
}

function anadirComentario($con, $nombre, $comentario, $fecha){

    // $consulta = "select * from grup where ID between 1 and 10";
    $consulta = "INSERT INTO comentarios(nombre, comentario, fecha) VALUES ('$nombre', '$comentario', '$fecha')";

	$res = mysqli_query($con, $consulta);

	if (mysqli_errno($con) != 0){
		$res = null;
	}else{
        echo "Comentario añadido!";
    }
}

function mostrarComentarios($con){

    $consulta = "SELECT * FROM comentarios";

    $res = mysqli_query($con, $consulta);

    if (mysqli_errno($con) != 0){
        $res = null;
    }else{
        // echo "Consulta completada!";
    }

    $return_arr = array();

    while($row = mysqli_fetch_array($res)){
        $id = $row['id'];
        $nombre = $row['nombre'];
        $comentario = $row['comentario'];
        $fecha = $row['fecha'];

        $return_arr[] = array("id" => $id,
                        "nombre" => $nombre,
                        "comentario" => $comentario,
                        "fecha" => $fecha);
    }

    //header --> https://cybmeta.com/ajax-con-json-y-php-ejemplo-paso-a-paso
    header('Content-type: application/json; charset=utf-8');
    //Encoding array in JSON format
    echo json_encode($return_arr);
}

//---------------------------------------------------------------------------------

if( isset($_POST['functionToCall']) && !empty($_POST['functionToCall']) ){
    $functionToCall = $_POST['functionToCall'];
    $conJS = conectarDB();

    switch($functionToCall){
        case 'anadirComentario': 
            $nombre = $_POST['nombre'];
            $comentario = $_POST['comentario'];
            $fecha = $_POST['fecha'];

            anadirComentario($conJS, $nombre, $comentario, $fecha);
            break;

        case 'mostrarComentarios': 
            mostrarComentarios($conJS);
            break;

        default:
            echo "Esto es el default";
            break;
    }

}else{
    die("Solicitud no válida.");
}

?>