<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="styles/style.css" rel="stylesheet" type="text/css">
    <title>Primer formulario en PHP</title>
</head>
<body>
    <style type="text/css">
        h1 {
            text-align: center;
            font-family: "Verdana";
            font-size: 40px;
        }
        
        form {
            text-align: center;
            font-size: 20px;
            font-family: "Arial";
        }
    </style>
    <h1>Formulario</h1>
    <form action="E10Datos.php" method="get">
        <label for="nombre">Nombre:</label>
        <input type="text" name="nombre" id="nombre">
        <br>
        <label for="apellido">Apellido:</label>
        <input type="text" name="apellido" id="apellido">
        <br>
        <label for="edad">Edad:</label>
        <input type="number" name="edad" id="edad">
        <br>
        <label for="sexo">Sexo:</label>
        <select name="sexo" id="sexo">
            <option value="hombre">Hombre</option>
            <option value="mujer">Mujer</option>
        </select>
        <br>
        <label for="pais">País:</label>
        <select name="pais" id="pais">
            <option value="argentina">Argentina</option>
            <option value="brasil">Brasil</option>
            <option value="chile">Chile</option>
            <option value="colombia">Colombia</option>
            <option value="peru">Peru</option>
        </select>
        <input type="submit" value="Enviar">
    </form>
</body>
</html>