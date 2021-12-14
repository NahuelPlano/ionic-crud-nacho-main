<?php
include "config.php";

$input = file_get_contents('php://input');
$message = array();

$id_falta = $_GET ['id_faltas'];
$q = mysqli_query($con, "DELETE FROM faltas Where id_falta = '($id_falta)' LIMIT 1 ");

if ($q) {
    http_response_code(201);
    $message ['status'] = "Sucess";
} else {
    http_response_code(422);
    $message ['status'] = "Error";
}

echo json_encode($message);
echo mysqli_error($con);