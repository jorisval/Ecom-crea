import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import CatalogView from "../layout/catalog-view";
import ProductStyled from "../styles/Product";
import { CartContext, HeaderContext } from "../utils/context";
import { useFetch } from "../utils/hooks";

function Product() {
    const { setActivePage } = useContext(HeaderContext);
    useEffect(() => {
        setActivePage("catalog");
    }, [setActivePage]);

    const { productId } = useParams();
    const { data } = useFetch(`http://localhost:3000/api/catalog/${productId}`);
    const { orderInfos, setOrderInfos, orderItem, setOrderItem} = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);
    const [activeOption, setActiveOption] = useState(null);
    const [showOptionWarning, setShowOptionWarning] = useState(false);

    useEffect(() => {
        if (data) {
            const addToCartButton = document.querySelector('.add-to-cart');
            if (addToCartButton && activeOption) {
                addToCartButton.addEventListener('click', function (e) {
                document.querySelector('.cart .background').style.display = 'block';
                document.querySelector('.cart-content').classList.add('show');
                });
            }
        }
    }, [data, activeOption])
    
    const handleAddToCart = () => {
        if (!activeOption) {
            setShowOptionWarning(true);
            return;
        }
        setShowOptionWarning(false);

        const existingItemIndex = orderInfos.orderItems.findIndex(
            (item) => item.productId === data._id && item.option === activeOption
        );
        
        // If Item exist with a valid index ([0, +00[)
        if (existingItemIndex > -1) {
            setOrderInfos((prevOrderInfos) => {
                const updatedOrderItems = prevOrderInfos.orderItems.map((item, idx) => {
                    if (idx === existingItemIndex) {
                        return { ...item, quantity: item.quantity + quantity };
                    }
                    return item;
                });
    
                return {
                    ...prevOrderInfos,
                    orderItems: updatedOrderItems,
                };
            });
        } else {
            const updatedOrderItem = {
                ...orderItem,
                quantity: quantity,
                option: activeOption,
            };
            setOrderItem(updatedOrderItem);
    
            setOrderInfos((prevOrderInfos) => {
                return {
                    ...prevOrderInfos,
                    orderItems: [...prevOrderInfos.orderItems, updatedOrderItem],
                };
            });
        }
    };

    return(
        <ProductStyled>
            {data && data.images ? (
                <div className="contact">
                    <div className="product-hero">
                        <div className="product-hero__part-1">
                            <img src={data.images[0]} alt=""/>
                        </div>
                        <div className="product-hero__part-2">
                            <div className="product-title">
                                <h2>{data.name}</h2>
                                <span>{data.price}€</span>
                            </div>
                            { data.options && data.options.map(option => {
                                return(
                                    <div className="option">
                                        <p>
                                            {option.name} 
                                            {showOptionWarning && (
                                                <i
                                                    className="bi bi-exclamation-triangle"
                                                    style={{ color: "orange", marginLeft: "5px" }}
                                                ></i>
                                            )}
                                        </p>
                                        <div className="option__case">
                                            {option.values && option.values.map((value, index) => {
                                                return(
                                                    <div 
                                                    className={value === activeOption ? "active" : ""} 
                                                    key={index} 
                                                    onClick={() => {
                                                        setActiveOption(value);
                                                        setOrderItem({option: value, productId: data._id, price: data.price
                                                        })
                                                    }}>{value}</div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                            }) }
                            <div className="quantity">
                                <label  for="quantity">Quantité</label>
                                <button className="quantity__button-down" onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                                <input type="number" id="quantity" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
                                <button className="quantity__button-up" onClick={() => setQuantity(quantity + 1)}>+</button>
                            </div>
                            <button className="add-to-cart" onClick={() => handleAddToCart()}>+ Ajouter au panier</button>
                        </div>
                    </div>
                    <div className="product-body">
                        {data.description}
                    </div>
                    <div className="product-catalog-view">
                        <div className="solid"></div>
                        <h3>Découvrir d'autres services</h3>
                        <CatalogView />
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </ProductStyled>
    );
}

export default Product;