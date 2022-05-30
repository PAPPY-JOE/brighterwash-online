import React from "react";
import "../assets/Product.css";
import { useStateValue } from "../StateProvider";

function Product({ id, title, image, price }) {
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
      },
    });
  };
  return (
    <div className="product__Box">
      <div className="product">
        <div className="product__info">
          <p id="product__info__title">{title}</p>
          <p className="product__price">
            <small className="naira">₦</small>
            <strong>{price}</strong>
          </p>
        </div>

        <img src={image} />

        <button onClick={addToBasket}>Add to Laundry Basket</button>
      </div>
    </div>
  );
}

export default Product;
