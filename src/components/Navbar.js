import { useContext, useState } from "react";
import { Container, Button, Navbar, Modal } from "react-bootstrap";
import { CartContext } from "../CartContext";
import CartProduct from "./CartProduct";

function NavbarComponent() {
  const cart = useContext(CartContext);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);
  const productsCount = cart.items.reduce((sum, product) => {
    return sum + product.quantity;
  }, 0);
  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">Ecommerce store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleShow}> Cart ({productsCount} Items)</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleHide}>
        <Modal.Header closeButton>Shopping Cart</Modal.Header>
        <Modal.Body>
          {productsCount > 0 ? (
            <>
              <p>Items in your cart:</p>
              {cart.items.map((curr_prod, idx) => (
                <CartProduct
                  key={idx}
                  id={curr_prod.id}
                  quantity={curr_prod.quantity}
                />
              ))}
              <h1>Total: Rs.{cart.getTotalCost().toFixed(2)}</h1>
              <Button variant="success">Buy now</Button>
            </>
          ) : (
            <h1>There are no items in your cart.</h1>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavbarComponent;
