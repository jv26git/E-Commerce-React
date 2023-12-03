import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { ItemCount } from "./ItemCount";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export const ItemDetail = ({ item }) => {
  const [quantity, setquantity] = useState(0);
  const { addItem } = useContext(CartContext)
  const agregarProducto = (quantity) => {
    setquantity(quantity);
    addItem(item, quantity)
  };

  return (
    <Container className="mt-5 items carditem">
      <Card className="bg-dark" style={{ width: "25rem" }}>
        <Card.Img variant="top" src={item.pictureUrl} alt={item.tittle} />
        <Card.Body className="itembody">
          <div className="itembody">
            <Card.Title>{item.tittle}</Card.Title>
            <span>{item.description}</span>
            <span>$USD {item.price}</span>
            <span>Stock: {item.stock}</span>
          </div>
          {quantity > 0 ? (
            <Link to="/cart" className="Button">
              Finalizar compra
            </Link>
          ) : (
            <ItemCount initial={1} stock={10} onAdd={agregarProducto} />
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};