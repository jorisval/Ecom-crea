import { useState, createContext } from 'react';

export const HeaderContext = createContext();
export const HeaderProvider = ({children}) => {
    const [activePage, setActivePage] = useState('');
    return (
        <HeaderContext.Provider value={{activePage, setActivePage}}>
            {children}
        </HeaderContext.Provider>
    );
};

export const CartContext = createContext();
export const CartProvider = ({children}) => {
    const [orderInfos, setOrderInfos] = useState({
        email: '',
        name: '',
        totalAmount: 0,
        orderStatus: '',
        shippingAddress: {
            street: '',
            city: '',
            state: '',
            country: '',
            zipCode: ''
        },
        billingAddress: {
            street: '',
            city: '',
            state: '',
            country: '',
            zipCode: ''
        },
        paymentMethod: '',
        paymentStatus: '',
        paymentAmount: 0,
        orderItems: [],
    });
    
    const [orderItem, setOrderItem] = useState({
        productId: '',
        option: '',
        price: 0,
        quantity: 0
    });
    return (
        <CartContext.Provider value={{orderInfos, setOrderInfos, orderItem, setOrderItem}}>
            {children}
        </CartContext.Provider>
    )
};
