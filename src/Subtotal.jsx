import React from 'react'
import './Subtotal.css'
import { useNavigate } from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import CurrencyFormat from 'react-currency-format'
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const history = useNavigate();
  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

  return (
    <div className="subtotal">
         <CurrencyFormat
      renderText={(value) => (
        <div>
          <p>
            Subtotal ({basket.length} items): <strong>{value}</strong>
          </p>
          <small className="subtotal__gift">
            <input type="checkbox" /> This order contains a gift
          </small>
        </div>
      )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
         <button onClick={(e) => history('/Payment')}>
        Proceed to Checkout
      </button>
    </div>
  )
}

export default Subtotal