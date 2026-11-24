import { useState } from 'react';
import initialItems from './data/items.json';
import Controls from './components/Controls';
import AddItemForm from './components/AddItemForm';
import ItemList from './components/ItemList';

function sortItems(items, sortBy) {
  const sorted = [...items];

  if (sortBy === 'name') {
    sorted.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'rating-high') {
    sorted.sort((a, b) => b.rating - a.rating);
  } else {
    sorted.sort((a, b) => a.rating - b.rating);
  }

  return sorted;
}

function App() {
  const [items, setItems] = useState(initialItems);
  const [searchText, setSearchText] = useState('');
  const [sortBy, setSortBy] = useState('name');

  function addItem(newItem) {
    setItems([...items, newItem]);
  }

  function deleteItem(id) {
    setItems(items.filter(item => item.id !== id));
  }

  function changeRating(id, newRating) {
    setItems(
      items.map(item => (item.id === id ? { ...item, rating: newRating } : item))
    );
  }

  const search = searchText.trim().toLowerCase();
  const matchingItems = items.filter(
    item =>
      item.name.toLowerCase().includes(search) ||
      item.description.toLowerCase().includes(search)
  );
  const visibleItems = sortItems(matchingItems, sortBy);

  return (
    <div className="app">
      <h1>My Travel Wishlist</h1>

      <AddItemForm onAdd={addItem} />

      <Controls
        searchText={searchText}
        onSearchChange={setSearchText}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      <ItemList
        items={visibleItems}
        onDelete={deleteItem}
        onRatingChange={changeRating}
      />
    </div>
  );
}

export default App;