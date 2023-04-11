import NavbarComponent from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Success from "./pages/Success.js";
import Cancel from "./pages/Cancel";
import Store from "./pages/Store";
import CartProvider from "./CartContext";

export default function App() {
  return (
    <CartProvider>
      <Container>
        <NavbarComponent></NavbarComponent>
        <BrowserRouter>
          <Routes>
            <Route index element={<Store />} />
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </CartProvider>
  );
}
