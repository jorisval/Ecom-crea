import { useEffect, useContext, useState } from "react";
import { CartContext } from "../utils/context";
import { useFetch } from "../utils/hooks";

function Cart() {
    let productIds = [];
    const [subtotal, setSubtotal] = useState(0);
    const {orderInfos, setOrderInfos} = useContext(CartContext);

    if(orderInfos.orderItems) {
        orderInfos.orderItems.forEach(item => {
            productIds.push(item.productId);
        });
    }
    
    useEffect(() => {
        let newSubtotal = 0;
        orderInfos.orderItems.forEach(item => {
            newSubtotal += item.price * item.quantity;
        });
        setSubtotal(newSubtotal);
    }, [orderInfos.orderItems]);

    const { data } = useFetch(`http://localhost:3000/api/catalog/products/${productIds}`);
    
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
        
        document.querySelector('.cart-content__header .bi-x').addEventListener('click', function(e) {
            document.querySelector('.cart-content').classList.remove('show');
            document.querySelector('.cart .background').style.display = 'none';
        });          
    }, []);

    const downQuantity = (index) => {
        setOrderInfos(prevOrderInfos => {
            const updatedOrderItems = prevOrderInfos.orderItems.map((item, idx) => {
                if (idx === index) {
                    return { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 };
                }
                return item;
            });
    
            return {
                ...prevOrderInfos,
                orderItems: updatedOrderItems
            };
        });
    };
    
    const upQuantity = (index) => {
        setOrderInfos(prevOrderInfos => {
            const updatedOrderItems = prevOrderInfos.orderItems.map((item, idx) => {
                if (idx === index) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
    
            return {
                ...prevOrderInfos,
                orderItems: updatedOrderItems
            };
        });
    };
    
    const setQuantity = (index, value) => {
        setOrderInfos(prevOrderInfos => {
            const updatedOrderItems = prevOrderInfos.orderItems.map((item, idx) => {
                if (idx === index) {
                    return { ...item, quantity: value };
                }
                return item;
            });
    
            return {
                ...prevOrderInfos,
                orderItems: updatedOrderItems
            };
        });
    };

    const removeItem = (index) => {
        setOrderInfos(prevOrderInfos => {
            const updatedOrderItems = prevOrderInfos.orderItems.filter((item, idx) => idx !== index);
            return {
                ...prevOrderInfos,
                orderItems: updatedOrderItems
            };
        });
    };
    
    return (
        <div className="cart">
            <div className="background"></div>
            <div className="cart-content">
                <div className="cart-content__header">
                    <span>Panier</span>
                    <span className="bi bi-x"></span>
                </div>
                <div className="cart-content-product">
                    {Array.isArray(data) && data.map((item, index) => {
                        let itemIndex = 0;
                        return(
                            <div key={index}>
                                {orderInfos.orderItems.map((product, ind) => {
                                    if (product.productId === item._id) {
                                        itemIndex = ind;
                                    }
                                    return null;
                                })}
                                <div className="cart-content-product__part1">
                                    <img src={item.images[0]} alt="" />
                                </div>
                                <div className="cart-content-product__part2">
                                    <div className="cart-content-product__part2-title">
                                        <span>{item.name}</span>
                                        <span className="bi bi-x" onClick={() => removeItem(itemIndex)}></span>
                                    </div>
                                    <div className="cart-content-product__part2-option">
                                        {orderInfos.orderItems.map((product) => {
                                            if (product.productId === item._id) {
                                                return <span>{product.option}</span>;
                                            }
                                            return null;
                                        })}
                                    </div>
                                    <div className="cart-content-product__part2-quantity">
                                        <div className="quantity">
                                            <button className="quantity__button-down" onClick={() => downQuantity(itemIndex)}>-</button>
                                            <input type="number" id="quantity" value={orderInfos.orderItems[itemIndex].quantity} onChange={(e) => setQuantity(itemIndex, Number(e.target.value))} />
                                            <button className="quantity__button-up" onClick={() => upQuantity(itemIndex)}>+</button>
                                        </div>
                                        <div className="price">{item.price}€</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="cart-content-subtotal">
                    <span>Sous-total</span>
                    <span className="price">{subtotal}€</span>
                </div>
                <div className="cart-content-payment">
                    <button className="payment-button"><span className="bi bi-credit-card"></span>Paiement sécurisé</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;