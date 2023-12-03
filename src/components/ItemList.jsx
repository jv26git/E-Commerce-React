import { Item } from "./Item";

export const ItemList = ({ items }) => {
    return (
        <main className="items">
            {items.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </main>
    );
};