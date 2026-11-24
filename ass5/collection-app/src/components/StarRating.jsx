const stars = [1, 2, 3, 4, 5];

function StarRating({ rating, onChange }) {
  return (
    <div className="stars">
      {stars.map(star => (
        <button
          key={star}
          type="button"
          className={star <= rating ? 'star filled' : 'star'}
          aria-label={`Rate ${star} out of 5`}
          onClick={() => onChange(star)}
        >
          ★
        </button>
      ))}
    </div>
  );
}

export default StarRating;