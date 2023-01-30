<?php $currentPage = 'portfolio';?>
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
            <h1>Portfolio<span class="bi bi-chevron-double-right"></span></h1>
        </div>
        <div class="portfolio">
            <ul class="portfolio__menu">
                <li class="boutiques">
                    <a href="" class="">Boutiques</a>
                </li>
                <li class="videos">
                    <a href="" class="active">Vidéos</a>
                </li>
            </ul>
            <div class="portfolio__video-contents">
                <div class="video-container">
                    <video controls>
                        <source src="./videos/video-hair-1.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div class="video-container">
                    <video controls>
                        <source src="./videos/video-toy-1.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div class="video-container">
                    <video controls>
                        <source src="./videos/video-toy-2.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div class="video-container">
                    <video controls>
                        <source src="./videos/video-hair-1.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div class="video-container">
                    <video controls>
                        <source src="./videos/video-toy-1.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div class="video-container">
                    <video controls>
                        <source src="./videos/video-toy-2.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div class="video-container">
                    <video controls>
                        <source src="./videos/video-hair-1.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div class="video-container">
                    <video controls>
                        <source src="./videos/video-toy-1.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div class="video-container">
                    <video controls>
                        <source src="./videos/video-toy-2.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
        <div class="portfolio-button">
            <button class="cta-button">Je veux les mêmes</button>
        </div>
        <?php include("footer.php");?>

        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>

        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

        <script src="js/index.js"></script>
    </body>
</html>