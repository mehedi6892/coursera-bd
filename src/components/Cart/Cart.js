import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for(let i = 0; i<cart.length; i++){
        const course = cart[i];
        total = total + course.price;
    }

    const maintainCost = ((20*total)/1000).toFixed(2); //transactin fee 1000 a 20 taka
    const grandTotal =(total + Number(maintainCost)).toFixed(2);
    return (
        <div className="order_details">
             <h2>Order Summery</h2> 
        	 <p>Course Ordered: <strong>{cart.length}</strong> </p>
             <p>Course Price: <strong>{total} </strong> BDT.</p>
             <p>Transaction Fee: <strong>{maintainCost}</strong>    BDT.</p>
             <p>Total Course Price: <strong>{grandTotal} </strong>  BDT.</p>
             <br/>
             <button className="main-button">Review Your Order</button>
                     

        </div>
    );
};

export default Cart;