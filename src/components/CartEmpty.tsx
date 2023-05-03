import React from 'react';
import { Link } from 'react-router-dom';

const CartEmpty: React.FC = () => {
  return (
    <div className="cart cart--empty">
      <h2>Cart is empty</h2>
      <p>
        Most likely, you have not placed an order yet.<br />
        To place an order, go to the main page.
      </p>
      <br/>
      <Link to="/" className="button button--black">
        <span>To Home</span>
      </Link>
    </div>
  )
}

export default CartEmpty;