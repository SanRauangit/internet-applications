import ItemCard from './ItemCard';

function ItemList({ items, onDelete, onRatingChange }) {
  if (items.length === 0) {
    return <p className="empty">No items found.</p>;
  }

  return (
    <div className="item-list">
      {items.map(item => (
        <ItemCard
          key={item.id}
          item={item}
          onDelete={onDelete}
          onRatingChange={onRatingChange}
        />
      ))}
    </div>
  );
}

export default ItemList;