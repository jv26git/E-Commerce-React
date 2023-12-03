import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseconfig";
import { ItemDetail } from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      const docId = doc(db, "items", id);
      const docItem = await getDoc(docId);

      docItem.exists
        ? setItem({ id: docItem.id, ...docItem.data() })
        : setItem(null);
    };
    id && fetchItem();
  }, [id]);

  return (
    <Container>
      {item ? <ItemDetail item={item} /> : <>Cargando...</>}
    </Container>
  );
};
export default ItemDetailContainer;