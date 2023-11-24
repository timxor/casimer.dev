import React, { useState } from 'react';
import axios from 'axios';

const SearchForm = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async (event) => {
        event.preventDefault();
        setError('');
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:8000/api/search', { params: { q: query } });
            setResults(response.data);
        } catch (error) {
            setError('Error fetching data. Please try again.');
            setResults([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input 
                    type="text" 
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)} 
                    placeholder="Search..."
                />
                <button type="submit">Search</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <ul>
                {results.map((item, index) => (
                    <li key={index}>{item.name} - {item.description}</li> {/* Assuming results have 'name' and 'description' fields */}
                ))}
            </ul>
        </div>
    );
};

export default SearchForm;
