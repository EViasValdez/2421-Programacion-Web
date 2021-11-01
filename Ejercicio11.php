<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="styles/style.css" rel="stylesheet" type="text/css">
    <title>Mayusculas y minusculas</title>
</head>
<body>
    <style type="text/css">
    h1{
        text-align: center;
        font-family: "Franklin Gothic";
    }
    form{
        text-align: center;
        font-size: 20px;
        font-family: "Lucida Console";
    }
    </style>
    <h1>Minusculas y mayusculas</h1>
    <form action="E11Datos.php" method="get">
        <label for="texto">Escriba aqui su texto</label>
        <input type="text" name="palabra">
        <br>
        <label for="tipo">Ponga un tipo</label>
        <select name="tipo">
            <option value="0">minusculas</option>
            <option value="1">MAYUSCULAS</option>
        <br>
        <input type="submit" value="Enviar">
    </form>
</body>
</html>