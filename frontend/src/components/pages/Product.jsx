import CatalogView from "../layout/catalog-view";

function Product() {
    return(
        <div className="contact">
            <div className="product-hero">
                <div className="product-hero__part-1"><img src="././assets/images/service-video.png" alt=""/></div>
                <div className="product-hero__part-2">
                    <div className="product-title">
                        <h2>Réalisation de vidéo publicitaire</h2>
                        <span>45€</span>
                    </div>
                    <div className="option">
                        <p>Option</p>
                        <div className="option__case">
                            <div>Pack 1</div>
                            <div>Pack 2</div>
                            <div>Pack 3</div>
                            <div>Retouche illimitée</div>
                            <div>Langue au choix</div>
                            <div>Livraison express</div>
                        </div>
                    </div>
                    <div className="quantity">
                        <label  for="quantity">Quantité</label>
                        <button className="quantity__button-down">-</button>
                        <input type="number" id="quantity" defaultValue="1"/>
                        <button className="quantity__button-up">+</button>
                    </div>
                    <button className="add-to-cart">+ Ajouter au panier</button>
                </div>
            </div>
            <div className="product-body">
                <p>Praesent ultricies lacus in ligula volutpat feugiat. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Fusce luctus justo eget nisi hendrerit, quis aliquam arcu porta. Cras ultricies, elit sit amet cursus consectetur, risus felis ullamcorper nulla, ut scelerisque sapien lorem non sem. Integer vestibulum ornare ligula, a placerat lectus volutpat ultrices. Aliquam commodo malesuada purus a mollis. Vestibulum pulvinar aliquam libero eu consequat.</p>
                <p>Cras massa orci, ultrices sed scelerisque id, semper vel neque. Proin a turpis quis nibh cursus hendrerit sit amet vel libero. Nullam sit amet laoreet ante. Mauris sit amet mi vitae arcu dignissim porttitor et in arcu. Nullam eleifend molestie arcu, pretium fermentum orci feugiat eget. Integer dapibus tincidunt ipsum, at rutrum magna rutrum at. Quisque pretium convallis vestibulum.</p>
                <p>bitasse platea dictumst. In hac habitasse platea dictumst. Fusce luctus justo eget nisi hendrerit, quis aliquam arcu porta. Cras ultricies, elit sit amet cursus consectetur, risus felis ullamcorper nulla, ut scelerisque sapien lorem non sem. Integer vestibulum ornare ligula, a placerat lectus volutpat ultrices. Aliquam commodo malesuada purus a m</p>
                <p>Vestibulum pulvinar aliquam libero eu consequat. Cras massa orci, ultrices sed scelerisque id, semper vel neque. Proin a turpis quis nibh cursus hendrerit sit amet vel libero. Nullam sit amet laoreet ante. Mauris sit amet mi vitae arcu dignissim porttitor et in arcu. Nullam eleifend molestie arcu, pretium fermentum orci feugiat eget. Integer dapibus tincidunt ipsum, at rutrum magna rutrum at. Quisque pretium convallis vestibulum.</p>
            </div>
            <div className="product-catalog-view">
                <div className="solid"></div>
                <h3>Découvrir d'autres services</h3>
                <CatalogView />
            </div>
        </div>
    );
}

export default Product;