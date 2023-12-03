import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { getDocs, collection, where, query } from "firebase/firestore";
import { db } from "../firebase/firebaseconfig";
import { ItemList } from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();
  const [greeting, setGreeting] = useState('Productos');

  useEffect(() => {
    const greetingsMap = {
      anime: 'Anime',
      starwars: 'Star Wars',
      mix: 'Colección',
    };
    const newGreeting = greetingsMap[id] || 'Productos';
    setGreeting(newGreeting);
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      const itemsCollection = collection(db, "items");
      const categoryQuery = id ? query(itemsCollection, where("category", "==", id)) : itemsCollection;
      const docItems = await getDocs(categoryQuery);
      const itemsData = docItems.docs.map((doc) => ({
        id: doc.id, ...doc.data(),
      }));
      setItems(itemsData);
    };
    fetchData();
  }, [id]);

  return (
    <Container>
      <h1 className="texto">
        {greeting}
        <ItemList items={items} />
      </h1>
    </Container>
  );
};
export default ItemListContainer;