function Controls({ searchText, onSearchChange, sortBy, onSortChange }) {
  return (
    <div className="controls">
      <label>
        Search
        <input
          type="text"
          placeholder="Search by name or description"
          value={searchText}
          onChange={event => onSearchChange(event.target.value)}
        />
      </label>

      <label>
        Sort by
        <select value={sortBy} onChange={event => onSortChange(event.target.value)}>
          <option value="name">Name (A-Z)</option>
          <option value="rating-high">Rating (highest first)</option>
          <option value="rating-low">Rating (lowest first)</option>
        </select>
      </label>
    </div>
  );
}

export default Controls;