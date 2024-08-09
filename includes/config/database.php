<?php

function conectarDB() : mysqli
{
    $db = mysqli_connect('localhost', 'root', '', 'bienesraices_crud');


    if (!$db) {
        echo "No Se Pudo Conectar";
        exit;
    }

    return $db;
}
