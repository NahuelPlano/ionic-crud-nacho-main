<?php

include "config.php";
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();
$estado = $data['estado'];
$fecha = $data['fecha'];
$id_alumno = $data['id_alumno'];

$q = mysqli_query ($con, "INSERT INTO faltas (estado, fecha, id_alumno) VALUES 
('$estado', '$fecha', '$id_alumno')");

if ($q) {
    http_response_code(201);
    $message ['status'] = "Sucess";
} else {
    http_response_code(422);
    $message ['status'] = "Error";
}

echo json_encode($message);
echo mysqli_error($con);