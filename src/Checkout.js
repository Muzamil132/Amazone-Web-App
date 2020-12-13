

import './check.css'
import React from 'react';

import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import {useHistory} from 'react-router-dom'

function Checkout() {
   
  
  const [{ basket}, dispatch] = useStateValue();
  const history =useHistory()
  const total =  basket?.reduce((amount, item) => parseFloat(item.price) + amount, 0);
  return (
    <div className="checkout">
      <div className="checkout__left">   
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
            
        <div>
         
          <h2 className="checkout__title">Your shopping Basket</h2>

          {basket.map(item => (
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
      <div className="subtotal">
        {
          basket.length>0 &&<div> <h3>Subtotal:{total}<span>$</span></h3>
                     <h5>No of items :<span>{basket.length}</span></h5>
                     <button onClick={(e)=>history.push('/payment')} className="check_btn">Check out</button>
             
          </div>
        }
      </div>
     
    </div>
  );
}

export default Checkout;
