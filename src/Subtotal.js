import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  const getBasketTotal = arr => {
    return arr.reduce((sum, { price }) => {
      return sum + price;
    }, 0);
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={value => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong>{` ${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // part of the homework
        displayType={'text'}
        thousandSeparator={true}
        prefix={'€'}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
