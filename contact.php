<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=divice-width, initial-scale=1.0">
        
        <!-- Bootstrap icons -->
        <link href='https://fonts.googleapis.com/css?family=Urbanist' rel='stylesheet'>

        <!-- Bootstrap -->
        <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"> -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">

        <!-- CSS -->
        <link rel="stylesheet" href="public/css/style.css"/>
        
        <title>Votre équipe !</title>
    </head>
    <body>
        <?php include("header.php");?>
        <div class="pages-title">
            <h1>Contactez-nous<span class="bi bi-chevron-double-right"></span></h1>
        </div>
        <div class="contact-form">
            <form method="post" action="">
                <div><input type="text" name="name" id="name" placeholder="Nom"></div>
                <div><input type="email" name="email" id="email" placeholder="Email"></div>
                <div><textarea name="comment" id="comment" rows="6" placeholder="Commentaire..."></textarea></div>
                <div class="checkbox"><input type="checkbox" name="agree" id="agree"><label for="">Dans le but de ma demande personnelle via le formulaire, j'accepte à ce que mes données soient utilisées afin de me recontacter. Vos informations ne seront en aucun cas conservées à des fins commerciales.</label></div>
                <div><input type="submit" value="Send"></div>
            </form>
        </div>
        <?php include("footer.php");?>

        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>

        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

        <script src="js/index.js"></script>
    </body>
</html>