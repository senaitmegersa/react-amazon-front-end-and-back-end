import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from "./StateProvider";
import Subtotal from './Subtotal'
function Checkout() {
  const [{ basket, }, dispatch] = useStateValue();
  return (
      <div className="checkout">
    <div className="checkout__left">
    <img className="checkout__ad" src="https://m.media-amazon.com/images/G/01/credit/img20/PCB/ULP/PCB_YLPHeader.png" />

    <div>
          <h3>Hello,</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
          
      </div>
       </div>
  <div className="checkout__right">
     <Subtotal/>
  </div>
  </div>
  )
}

export default Checkout