<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Lexend&display=swap" rel="stylesheet">
    <title>Postman y bases de datos</title>
</head>
<style type="text/css">
    body{
        background-color: rgb(0, 153, 51);
    }
    #texto{
        text-align: center;
        font-family: "Lexend";
        color: white;
    }
    form{
        text-align: center;
        font-family: "Lexend";
        font-size: 20px;
        color: white;
    }
    #n, #e{
        border-collapse: collapse;
        border: 2px solid rgb(255, 255, 255);
        text-align: center;
        font-family: "Lexend";
        font-size: 18px;
        color: white;
        background-color: transparent;
        transition: 0.2s ease-in-out;
    }
    #s{
        border-collapse: collapse;
        border: 2px solid rgb(255, 255, 255);
        text-align: center;
        font-family: "Lexend";
        font-size: 18px;
        color: white;
        background-color: transparent;
        transition: 0.2s ease-in-out;
    }
    #n:hover, #e:hover{
        border-collapse: collapse;
        border: 2px solid rgb(255, 255, 255);
        text-align: center;
        font-family: "Lexend";
        font-size: 18px;
        color: grey;
        background-color: white;
        transition: 0.2s ease-in-out;
    }
    #s:hover{
        border-collapse: collapse;
        border: 2px solid rgb(255, 255, 255);
        text-align: center;
        font-family: "Lexend";
        font-size: 18px;
        color: grey;
        background-color: white;
    }
</style>
<body>
    <h1 id="texto">Hola mundo</h1>
    <form action="E12Postm.php" method="post">
        <input id="n" name="nombre" placeholder="Nombre">
        <input id="e" name="edad" placeholder="Edad">
        <input id="s" type="submit" value="Enviar">
    </form>
</body>
</html>