<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/style.css">
    <title>Document</title>
</head>

<body>
    <h1>todolist</h1>
    <form action="" method="post">
        <div class="container">
        <div>
            <label class="label" for="titre">titre de la tache</label><br>
            <input class="input" type="text" name="title" id="titre">
        </div>
        <div>
            <label class="label" for="desc">description de la tache</label><br>
            <input class="input" type="text" id="desc" name="description">
        </div>
        <button>save</button>
        </div>
    </form>
   
 <hr>
    <div class="todos"></div>
<script src="assets/js/main.js"></script>
</body>

</html>