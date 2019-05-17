import React, { useState } from 'react';

const { Provider, Consumer } = React.createContext();

export const Cart = ({ children }) => {
  const [list, setList] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [visible, setVisible] = useState(false);
  const [interval, setInterval] = useState();

  const add = product => {
    const { id } = product;
    const inList = list.filter(e => e.product && e.product.id === id);
    if (inList.length > 0) {
      const newList = list.map(e => {
        if (e.product.id === id)
          return { product: e.product, amount: e.amount + 1 };
        return e;
      });
      setList(newList);
    } else {
      const newList = list;
      newList.push({ product, amount: 1 });
      setList(newList);
    }
    setQuantity(quantity + 1);
  };

  const remove = product => {
    const { id } = product;
    const newList = list.map(p => {
      if (p.product.id === id) {
        p.amount = p.amount - 1;
        return p;
      }
      return p;
    });
    setList(newList);
    setQuantity(quantity - 1);
  };

  change = (product, value) => {
    let valueNumber = Number(value);
    const { id } = product;
    const newList = list.map(p => {
      if (p.product.id === id) {
        p.amount = valueNumber;
        return p;
      }
      return p;
    });
    setList(newList);
    const newQuantity = newList.reduce((a, b) => a + b.amount, 0);
    setQuantity(newQuantity);
  };

  return (
    <Provider
      value={{
        list,
        add,
        remove,
        change,
        quantity,
        visible,
        setVisible
      }}
    >
      {children}
    </Provider>
  );
};

export function withCart(Component) {
  return function WrapperComponent(props) {
    return <Consumer>{cart => <Component {...props} cart={cart} />}</Consumer>;
  };
}
