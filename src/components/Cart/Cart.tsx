import React from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../store';
import { ICartItem } from '../../store/modules/Cart/types';

// import { Container } from './styles';

const Cart: React.FC = () => {
  const cart = useSelector<IState, ICartItem[]>(store => store.cart.items);

  return (
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preços</th>
          <th>Preço</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {cart.map(item => (
          <tr key={item.product.id}>
            <td>{item.product.title}</td>
            <td>{item.product.price}</td>
            <td>{item.quantity}</td>
            <td>{(item.product.price * item.quantity).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Cart;
