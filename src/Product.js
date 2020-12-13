import React,{useContext} from 'react'
import StarIcon from '@material-ui/icons/Star';

import { useStateValue } from "./StateProvider";



import './App.css'

const Product=({image,id,title,price,rating}) =>{

    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
      // dispatch the item into the data layer
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
        },
      });
    };
  
  
    return (
        <div className="product">
        <div className="product_info">
        <p>{title}</p>
        <p className="price">
            <small>$</small>
            <strong>{price}</strong>
            </p>
            <div className="rating">
            {
                Array(rating).fill().map((_)=>(
                    <p><StarIcon/></p>
                )
                    
                )
            }

            </div>
            </div>
            <div className="product_button">
                <img className="product_image" src={image} alt="" />
                <button onClick={addToBasket}  >Add to Basket</button> 
            </div>


        
            
        </div>
    )
}

export default Product
