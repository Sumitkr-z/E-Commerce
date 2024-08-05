import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Cart.css';

const Cart = ({ items, onRemoveItem }) => {
  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="container my-4">
      <h2>Shopping Cart</h2>
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button className="btn btn-danger" onClick={() => onRemoveItem(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="text-end">Total:</td>
            <td colSpan="2">${calculateTotal()}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Cart;
