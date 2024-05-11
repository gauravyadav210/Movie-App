// components/FilterOptions.js
import React, { useState } from 'react';

function FilterOptions({ onChange }) {
  const [genre, setGenre] = useState('');
  const [director, setDirector] = useState('');
  // Add more filter state variables as needed

  const handleApplyFilters = () => {
    const filters = {
      genre,
      director,
      // Add more filter values here
    };
    onChange(filters);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by genre..."
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Filter by director..."
        value={director}
        onChange={(e) => setDirector(e.target.value)}
      />
      {/* Add more filter inputs here */}
      <button onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
}

export default FilterOptions;
