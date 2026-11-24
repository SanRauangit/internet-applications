import StarRating from './StarRating';

function ItemCard({ item, onDelete, onRatingChange }) {
  return (
    <article className="item-card">
      <img src={item.image} alt={item.name} />
      <div className="item-body">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <StarRating
          rating={item.rating}
          onChange={newRating => onRatingChange(item.id, newRating)}
        />
        <button type="button" className="delete-button" onClick={() => onDelete(item.id)}>
          Delete
        </button>
      </div>
    </article>
  );
}

export default ItemCard;