import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
const Product = (props) => {
    console.log(props)
    const {name,img,stock,price,seller,} = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-m'>
                 <h4 className='product-name'>{name}</h4>
                 <br />
                 <p> <small>By : {""}{seller}</small></p>
                 <b>${price}</b>
                 <p>only {""}{stock} {""}left in stock - order soon</p>
                 <button className='main-btn' onClick={() => props.clickProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
            
            
        </div>
    );
};

export default Product;