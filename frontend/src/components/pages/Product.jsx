import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import CatalogView from "../layout/catalog-view";
import { CartContext, HeaderContext } from "../utils/context";
import { useFetch } from "../utils/hooks";

function Product() {
    const { setActivePage } = useContext(HeaderContext);
    useEffect(() => {
        setActivePage("catalog");
    }, [setActivePage]);

    const { productId } = useParams();
    const { data } = useFetch(`http://localhost:3000/api/catalog/${productId}`);
    const { setOrderInfos, orderItem, setOrderItem} = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const divElmts = document.querySelectorAll('.option__case div');
        divElmts.forEach((divElmt) => {
            divElmt.addEventListener('click', (e) => {
                // Remove active class from all the options
                divElmts.forEach((el) => {
                  el.classList.remove('active');
                });
                // Add active class to the clicked option
                e.target.classList.add('active');
            });
        });
        
        document.querySelector('.add-to-cart').addEventListener('click', function(e) {
            document.querySelector('.cart .background').style.display = 'block';
            document.querySelector('.cart-content').classList.add('show');
        });
    }, [])
    
    const handleAddToCart = () => {
        const updatedOrderItem = {...orderItem, quantity: quantity};
        setOrderItem(updatedOrderItem);
        
        setOrderInfos(prevOrderInfos => {
            return {
                ...prevOrderInfos,
                orderItems: [...prevOrderInfos.orderItems, updatedOrderItem]
            };
        });
    };

    return(
        <div className="contact">
            <div className="product-hero">
                <div className="product-hero__part-1">
                    <img src={data.imageUrl} alt=""/>
                </div>
                <div className="product-hero__part-2">
                    <div className="product-title">
                        <h2>{data.name}</h2>
                        <span>{data.price}€</span>
                    </div>
                    { data.options && data.options.map(option => {
                        return(
                            <div className="option">
                                <p>{option.name}</p>
                                <div className="option__case">
                                    {option.values && option.values.map((value, index) => {
                                        return(
                                            <div className={value} key={index} onClick={() => setOrderItem({option: value, productId: data._id, price: data.price})}>{value}</div>
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
    );
}

export default Product;