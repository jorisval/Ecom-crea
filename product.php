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
        <?php include('header.php'); ?>
        <div class="product-hero">
            <div class="product-hero__part-1"><img src="./images/service-video.png"></div>
            <div class="product-hero__part-2">
                <div class="product-title">
                    <h2>Réalisation de vidéo publicitaire</h2>
                    <span>45€</span>
                </div>
                <div class="option">
                    <p>Option</p>
                    <div class="option__case">
                        <div>Pack 1</div>
                        <div>Pack 2</div>
                        <div>Pack 3</div>
                        <div>Retouche illimitée</div>
                        <div>Langue au choix</div>
                        <div>Livraison express</div>
                    </div>
                </div>
                <div class="quantity">
                    <label  for="quantity">Quantité</label>
                    <button class="quantity__button-down">-</button>
                    <input type="text" id="quantity" value="1">
                    <button class="quantity__button-up">+</button>
                </div>
                <button class="add-to-cart">+ Ajouter au panier</button>
            </div>
        </div>
        <div class="product-body">
            <p>Praesent ultricies lacus in ligula volutpat feugiat. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Fusce luctus justo eget nisi hendrerit, quis aliquam arcu porta. Cras ultricies, elit sit amet cursus consectetur, risus felis ullamcorper nulla, ut scelerisque sapien lorem non sem. Integer vestibulum ornare ligula, a placerat lectus volutpat ultrices. Aliquam commodo malesuada purus a mollis. Vestibulum pulvinar aliquam libero eu consequat.</p>
            <p>Cras massa orci, ultrices sed scelerisque id, semper vel neque. Proin a turpis quis nibh cursus hendrerit sit amet vel libero. Nullam sit amet laoreet ante. Mauris sit amet mi vitae arcu dignissim porttitor et in arcu. Nullam eleifend molestie arcu, pretium fermentum orci feugiat eget. Integer dapibus tincidunt ipsum, at rutrum magna rutrum at. Quisque pretium convallis vestibulum.</p>
            <p>bitasse platea dictumst. In hac habitasse platea dictumst. Fusce luctus justo eget nisi hendrerit, quis aliquam arcu porta. Cras ultricies, elit sit amet cursus consectetur, risus felis ullamcorper nulla, ut scelerisque sapien lorem non sem. Integer vestibulum ornare ligula, a placerat lectus volutpat ultrices. Aliquam commodo malesuada purus a m</p>
            <p>Vestibulum pulvinar aliquam libero eu consequat. Cras massa orci, ultrices sed scelerisque id, semper vel neque. Proin a turpis quis nibh cursus hendrerit sit amet vel libero. Nullam sit amet laoreet ante. Mauris sit amet mi vitae arcu dignissim porttitor et in arcu. Nullam eleifend molestie arcu, pretium fermentum orci feugiat eget. Integer dapibus tincidunt ipsum, at rutrum magna rutrum at. Quisque pretium convallis vestibulum.</p>
        </div>
        <?php include('footer.php'); ?>
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>

        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

        <script src="js/index.js"></script>
    </body>
</html>