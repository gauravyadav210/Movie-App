import React, { useState, useEffect } from 'react';
import './App.css';

// Sample movie data
let moviesData = [
  { id: 1, name: '3 Idiots', genre: 'Comedy', director: 'RajKumar Hirani', language: 'Hindi', description: "A hilarious yet poignant story of three friends navigating the pressures of Indian society's education system, challenging norms, and pursuing their passions against all odds.", actors: ['Amir Khan', 'Kareena Kapoor'] , imgId :'https://c.saavncdn.com/098/3Idiots-Hindi-2021-20210409142705-500x500.jpg' },
  { id: 2, name: 'Dilwale Dulhania Le Jayenge', genre: 'Comedy', director: 'Director 2', language: 'Hindi', description: 'Description 2', actors: ["A timeless romance where Raj and Simran fall in love during a trip to Europe, but face cultural barriers when they return to India. It's a journey of love, family, and tradition."] , imgId :'https://static.toiimg.com/thumb/msid-45343463,width-1280,height-720,imgsize-60805,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg' },
  // Add more movie data as needed
  { id: 3, name: 'Lagaan', genre: 'Action', director: 'Director 1', language: 'English, hindi', description: " Set during the British colonial era, it follows the story of villagers who challenge their oppressors to a cricket match, seeking relief from exorbitant taxes.", actors: ['Actor 1', 'Actor 2'] , imgId :"https://upload.wikimedia.org/wikipedia/en/b/b6/Lagaan.jpg"},
  { id: 4, name: 'Movie 4', genre: 'Comedy', director: 'Director 2', language: 'English', description: 'Description 2', actors: ['Actor 3', 'Actor 4'] },
  { id: 5, name: 'Movie 5', genre: 'Action', director: 'Director 1', language: 'English', description: 'Description 1', actors: ['Actor 1', 'Actor 2'] },
  { id: 6, name: 'Movie 6', genre: 'Comedy', director: 'Director 2', language: 'English', description: 'Description 2', actors: ['Actor 3', 'Actor 4'] },
  { id: 7, name: 'Movie 7', genre: 'Action', director: 'Director 1', language: 'English', description: 'Description 1', actors: ['Actor 1', 'Actor 2'] },
  { id: 8, name: 'Movie 8', genre: 'Comedy', director: 'Director 2', language: 'English', description: 'Description 2', actors: ['Actor 3', 'Actor 4'] },
  { id: 9, name: 'Movie 9', genre: 'Action', director: 'Director 1', language: 'English', description: 'Description 1', actors: ['Actor 1', 'Actor 2'] },
  { id: 10, name: 'Movie 10', genre: 'Comedy', director: 'Director 2', language: 'English', description: 'Description 2', actors: ['Actor 3', 'Actor 4'] },
  // { id: 3, name: 'Lagaan', genre: 'Action', director: 'Director 1', language: 'English, hindi', description: " Set during the British colonial era, it follows the story of villagers who challenge their oppressors to a cricket match, seeking relief from exorbitant taxes.", actors: ['Actor 1', 'Actor 2'] , imgId :"https://upload.wikimedia.org/wikipedia/en/b/b6/Lagaan.jpg"},
  { id: 4, name: 'Movie 12', genre: 'Comedy', director: 'Director 2', language: 'English', description: 'Description 2', actors: ['Actor 3', 'Actor 4'] },
  { id: 5, name: 'Movie 13', genre: 'Action', director: 'Director 1', language: 'English', description: 'Description 1', actors: ['Actor 1', 'Actor 2'] },
  { id: 6, name: 'Movie 14', genre: 'Comedy', director: 'Director 2', language: 'English', description: 'Description 2', actors: ['Actor 3', 'Actor 4'] },
  { id: 7, name: 'Movie 15', genre: 'Action', director: 'Director 1', language: 'English', description: 'Description 1', actors: ['Actor 1', 'Actor 2'] },
  { id: 8, name: 'Movie 16', genre: 'Comedy', director: 'Director 2', language: 'English', description: 'Description 2', actors: ['Actor 3', 'Actor 4'] },
  { id: 9, name: 'Movie 17', genre: 'Action', director: 'Director 1', language: 'English', description: 'Description 1', actors: ['Actor 1', 'Actor 2'] },
  { id: 10, name: 'Movie 18', genre: 'Comedy', director: 'Director 2', language: 'English', description: 'Description 2', actors: ['Actor 3', 'Actor 4'] },
];

const ITEMS_PER_PAGE = 18;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({ genre: '', director: '', language: '' });
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Simulate fetching movies from an API
    setMovies(moviesData);
    setFilteredMovies(moviesData);
  }, []);

  useEffect(() => {
    handlePagination(currentPage);
  }, [filteredMovies, currentPage]);

  const handleSearch = () => {
    const filtered = movies.filter(movie =>
      movie.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredMovies(filtered);
    setCurrentPage(1); // Reset to first page after search
  };

  const handleFilterChange = (filterType, value) => {
    setFilters({ ...filters, [filterType]: value });
  };

  useEffect(() => {
    let filtered = [...movies];
    Object.keys(filters).forEach(filterType => {
      if (filters[filterType]) {
        filtered = filtered.filter(movie => movie[filterType] === filters[filterType]);
      }
    });
    setFilteredMovies(filtered);
    setCurrentPage(1); // Reset to first page after filter change
  }, [filters, movies]);

  const handlePagination = (page) => {
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    setFilteredMovies(filteredMovies.slice(startIndex, endIndex));
    setCurrentPage(page); // Update current page
  };

  const handleBorrow = (movieId) => {
    // Simulate borrowing movie by making a fake API call
    setTimeout(() => {
      console.log(`Borrowed movie with ID ${movieId}`);
      // Handle successful borrow action
    }, 1000);
  };

  const totalPages = Math.ceil(filteredMovies.length / ITEMS_PER_PAGE);

  return (
    <div className="App">
      <div className="search-filters">
        <input
          type="text"
          placeholder="Search by movie name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>

        <select value={filters.genre} onChange={(e) => handleFilterChange('genre', e.target.value)}>
          <option value="">All Genres</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          {/* Add more genre options */}
        </select>

        {/* Add more filter dropdowns for director, language, etc. */}
      </div>

      <div className="movies-list">
        {filteredMovies.map(movie => (
          <div key={movie.id} className="movie-item">
            {/* <img src={`https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg`} alt={movie.name} /> */}
            <img className="imgSize" src={`${movie.imgId}`} alt={movie.name} />
            
            <div>
              <h2>{movie.name}</h2>
              <p>{movie.description}</p>
              <p>Director: {movie.director}</p>
              <p>Actors: {movie.actors.join(', ')}</p>
              <button onClick={() => handleBorrow(movie.id)}>Borrow</button>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
        <span>{currentPage} of {totalPages}</span>
        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default App;
