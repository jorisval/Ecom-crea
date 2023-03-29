<!--header.php-->

<div class="header <?php if ($currentPage == 'home') { echo 'home';} ?>">
    <div class="menu-md">
        <div class="menu-md__icon">
            <div id="icon-bar-one"></div>
            <div id="icon-bar-two"></div>
            <div id="icon-bar-three"></div>
        </div>
        <div class="menu-md__hide">
            <nav>
                <ul class="">
                    <li class=""><a class="" href="index.php">Accueil</a></li>
                    <li class=""><a class="" href="catalog.php">Catalogue</a></li>
                    <li class=""><a class="" href="portfolio-boutique.php">Portfolio</a></li>
                    <li class=""><a class="" href="legal.php">FAQ</a></li>
                    <li class=""><a class="" href="contact.php">Contact</a></li>
                    <li class=""><a class="" href="blog.php">Blog</a></li>
                </ul>
            </nav>
        </div>
    </div>
    
    <div class="header__logo">
        <img src="../src/assets/images/logo-ecom-crea.png">
    </div>
    <nav class="nav-lg">
        <ul class="">
            <li <?php if ($currentPage == 'home') { echo 'class="active"';} ?>><a href="index.php">Accueil</a></li>
            <li <?php if ($currentPage == 'catalog') { echo 'class="active"';} ?>><a href="catalog.php">Catalogue</a></li>
            <li <?php if ($currentPage == 'portfolio') { echo 'class="active"';} ?>><a href="portfolio-boutique.php">Portfolio</a></li>
            <li <?php if ($currentPage == 'faq') { echo 'class="active"';} ?>><a href="legal.php">FAQ</a></li>
            <li <?php if ($currentPage == 'contact') { echo 'class="active"';} ?>><a href="contact.php">Contact</a></li>
            <li <?php if ($currentPage == 'blog') { echo 'class="active"';} ?>><a href="blog.php">Blog</a></li>
        </ul>
    </nav>
    <div class="header__cart">
        <span class="bi bi-bag-plus"></span>
    </div>
    <div class="cart">
        <div class="background"></div>
        <div class="cart-content">
            <div class="cart-content__header">
                <span>Panier</span>
                <span class="bi bi-x"></span>
            </div>
            <div class="cart-content-product">
                <div class="cart-content-product__part1">
                    <img src="../src/assets/images/service-video.png">
                </div>
                <div class="cart-content-product__part2">
                    <div class="cart-content-product__part2-title">
                        <span>Réalisation de vidéo publicitaire</span>
                        <span class="bi bi-x"></span>
                    </div>
                    <div class="cart-content-product__part2-option">
                        <span>Pack 1</span>
                    </div>
                    <div class="cart-content-product__part2-quantity">
                        <div class="quantity">
                            <button class="quantity__button-down">-</button>
                            <input type="number" id="quantity" value="1">
                            <button class="quantity__button-up">+</button>
                        </div>
                        <div class="price">45€</div>
                    </div>
                </div>
            </div>
            <div class="cart-content-subtotal">
                <span>Sous-total</span>
                <span class="price">45€</span>
            </div>
            <div class="cart-content-payment">
                <button class="payment-button"><span class="bi bi-credit-card"></span>Paiement sécurisé</button>
            </div>
        </div>
    </div>
</div>