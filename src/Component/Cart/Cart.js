import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total , prd)=> total+prd.price,0);
    let shipping = 0;
    if (totalPrice > 35) {
        shipping = 0;
    }else if(totalPrice > 15){
        shipping = 4.00;
    }else if(totalPrice > 0){
        shipping = 12.99;
    }
    const tax = (totalPrice /10).toFixed(2);
    const greandTotall = (totalPrice + shipping + Number(tax)).toFixed(2); 

    const formetNumber = num =>{
        const prisition = num.toFixed(2);
        return Number (prisition);
    }
    return (
        <div>
            <h2>Order Summary</h2>
            <p>Product-Price : {formetNumber(totalPrice)}</p>
            <p>Items ordered:{cart.length}</p>
            <p>Shipping & Handling:	{shipping}</p>
            <p>Tax + Vat : {tax}</p>
            <p>Order Total: {greandTotall}</p>

        </div>
    );
};

export default Cart;