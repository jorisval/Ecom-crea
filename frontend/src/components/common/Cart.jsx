import { useEffect } from "react";

function Cart() {
    useEffect(() => {
        document.querySelector('.bi-bag-plus').addEventListener('click', function(e) {
            document.querySelector('.cart .background').style.display = 'block';
            document.querySelector('.cart-content').classList.add('show');
        });
        
        document.querySelector('.cart-content__header .bi-x').addEventListener('click', function(e) {
            document.querySelector('.cart-content').classList.remove('show');
            document.querySelector('.cart .background').style.display = 'none';
        });
        
        document.querySelector('.cart .background').addEventListener('click', function(e) {
            document.querySelector('.cart-content').classList.remove('show');
            document.querySelector('.cart .background').style.display = 'none';
        });
        
        //-- quantity section
        document.querySelector('.cart-content-product__part2-quantity .quantity__button-down').addEventListener('click', function() {
            var input = document.querySelector('.cart-content-product__part2-quantity #quantity');
            var inputValue = parseInt(input.value, 10);
            if (!isNaN(inputValue)) {
                if (inputValue > 0) {
                    input.value = inputValue - 1;
                } else {
                    input.value = 0;
                }
            } else {
                input.value = 1;
            }
        });
        
        document.querySelector('.cart-content-product__part2-quantity .quantity__button-up').addEventListener('click', function() {
            var input = document.querySelector('.cart-content-product__part2-quantity #quantity');
            var inputValue = parseInt(input.value, 10);
            if (!isNaN(inputValue)) {
              input.value = inputValue + 1;
            } else {
              input.value = 1;
            }
          });              
    }, []);

    return (
        <div className="cart">
            <div className="background"></div>
            <div className="cart-content">
                <div className="cart-content__header">
                    <span>Panier</span>
                    <span className="bi bi-x"></span>
                </div>
                <div className="cart-content-product">
                    <div className="cart-content-product__part1">
                        <img src="../src/assets/images/service-video.png" alt="" />
                    </div>
                    <div className="cart-content-product__part2">
                        <div className="cart-content-product__part2-title">
                            <span>Réalisation de vidéo publicitaire</span>
                            <span className="bi bi-x"></span>
                        </div>
                        <div className="cart-content-product__part2-option">
                            <span>Pack 1</span>
                        </div>
                        <div className="cart-content-product__part2-quantity">
                            <div className="quantity">
                                <button className="quantity__button-down">-</button>
                                <input type="number" id="quantity" defaultValue="1"/>
                                <button className="quantity__button-up">+</button>
                            </div>
                            <div className="price">45€</div>
                        </div>
                    </div>
                </div>
                <div className="cart-content-subtotal">
                    <span>Sous-total</span>
                    <span className="price">45€</span>
                </div>
                <div className="cart-content-payment">
                    <button className="payment-button"><span className="bi bi-credit-card"></span>Paiement sécurisé</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;