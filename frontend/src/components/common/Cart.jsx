import { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../utils/context";

function Cart() {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    let productIds = [];
    const [subtotal, setSubtotal] = useState(0);
    const { orderInfos, setOrderInfos } = useContext(CartContext);
    const [products, setProducts] = useState([]);

    if (orderInfos.orderItems) {
        orderInfos.orderItems.forEach((item) => {
        productIds.push(item.productId);
        });
    }

    useEffect(() => {
        let newSubtotal = 0;
        orderInfos.orderItems.forEach((item) => {
        newSubtotal = newSubtotal + item.price * item.quantity;
        });
        setSubtotal(newSubtotal);
    }, [orderInfos.orderItems]);

    useEffect(() => {
        if (productIds.length > 0) {
        const fetchProducts = async () => {
            const requests = productIds.map((id) =>
            fetch(`http://localhost:3000/api/catalog/${id}`).then((res) => res.json())
            );
            const products = await Promise.all(requests);
            setProducts(products);
        };
        fetchProducts();
        }
    }, [productIds]);

    
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
        
        document.querySelector('.cart .payment-button').addEventListener('click', function(e) {
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
                <div>
                    {products && products.map((item, index) => {
                        const itemIndex = orderInfos.orderItems.findIndex(
                            (product) => product.productId === item._id
                        );
                        // Do not render the item if it doesn't exist in orderInfos.orderItems
                        if (itemIndex === -1) {
                            return null;
                        }

                        return(
                            <div className="cart-content-product" key={index}>
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
                    <Link to='/checkout' className="payment-button"><span className="bi bi-credit-card"></span>Paiement sécurisé</Link>
                </div>
            </div>
        </div>
    );
}

export default Cart;