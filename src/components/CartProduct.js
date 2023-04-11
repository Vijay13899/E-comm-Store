import { Button } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import { getProductData } from "../productsStore";

function CartProduct(props) {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);

  return (
    <>
      <h3>{productData.title}</h3>
      <p>{quantity} total</p>
      <p>Rs.{(quantity * productData.price).toFixed(2)}</p>
      <Button size="sm" onClick={() => cart.deleteFromCart(id)}>
        Remove
      </Button>
      <hr />
    </>
  );
}

export default CartProduct;
