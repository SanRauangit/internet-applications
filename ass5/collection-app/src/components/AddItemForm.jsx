import { useState } from 'react';

const ratingOptions = [1, 2, 3, 4, 5];

function AddItemForm({ onAdd }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [rating, setRating] = useState(3);

  function handleSubmit(event) {
    event.preventDefault(); 

    if (name.trim() === '') {
      return; 
    }

    const trimmedName = name.trim();
    onAdd({
      id: Date.now(), 
      name: trimmedName,
      description: description.trim(),
      image: image.trim() || `https://picsum.photos/seed/${encodeURIComponent(trimmedName)}/400/300`,
      rating: rating
    });

    setName('');
    setDescription('');
    setImage('');
    setRating(3);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h2>Add a new item</h2>

      <label>
        Name
        <input type="text" value={name} onChange={event => setName(event.target.value)} />
      </label>

      <label>
        Description
        <input
          type="text"
          value={description}
          onChange={event => setDescription(event.target.value)}
        />
      </label>

      <label>
        Image URL (optional)
        <input type="text" value={image} onChange={event => setImage(event.target.value)} />
      </label>

      <label>
        Rating
        <select value={rating} onChange={event => setRating(Number(event.target.value))}>
          {ratingOptions.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <button type="submit">Add</button>
    </form>
  );
}

export default AddItemForm;