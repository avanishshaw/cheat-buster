import React from 'react';

const SearchForm = ({ onSearch, setEmail, email }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch();
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-6">
      <input
        type="email"
        placeholder="Enter partner's email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-grow p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
        required
      />
      <button
        type="submit"
        className="p-3 px-6 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;