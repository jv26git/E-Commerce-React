import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Item = ({ item }) => {
  return (
    <Card className='carditem bg-dark' style={{ width: '18rem' }} >
      <Card.Img variant="top" src={item.pictureUrl} alt={item.tittle} />
      <Card.Body className='itembody'>
        <div className='itembody'>
          <Card.Title>{item.tittle}</Card.Title>
          <span>{item.description}</span>
          <span>$USD {item.price}</span>
          <span>Stock: {item.stock}</span>
        </div>
        <Link to={`/items/${item.id}`}>
          <button className='Button' >Ver más</button>
        </Link>
      </Card.Body>
    </Card>
  );
}