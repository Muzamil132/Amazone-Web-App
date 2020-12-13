import React from 'react'
import CheckoutProduct from './CheckoutProduct'
import{useStateValue}  from './StateProvider'
import './checout.css'
const Payment = () => {

    const [{user,basket},dispatch] =useStateValue()
    return (
        <div className="payment">
            <div className="payment_container">
            <div className="payment_section">
                 <div className="payment_title">
                  <h3>Delivery Address</h3>
                 </div>
                 <div className="payment_address">
                   <p>{user?.email}</p>
                   <p>Redux 123 ,Street Flux, Karachi</p>
                   <p>Las React Ninja</p>
                 </div>
            </div>
            <div className="payment_section1">
                 <div className="payment_title">
                  <h3>Review items and delivery</h3>
                 </div>
                 <div className="payment_items">
                 {
                     basket.map(item=>(
                        <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
                     ))
                 }
                 </div>
            </div>
            <div className="payment_section">
                 <div className="payment_title">
                  <h3>Payment Section</h3>
                 </div>
                 
            </div>

            </div>
        </div>
    )
}

export default Payment
