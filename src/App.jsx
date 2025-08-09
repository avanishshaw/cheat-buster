import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import Results from './components/Results';
import { searchUserByEmail } from './api/userAPI';

function App() {
  const [email, setEmail] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const data = await searchUserByEmail(email);
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-100 flex justify-center items-center min-h-screen font-sans">
      <div className="bg-slate-100 p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800">
          Cheat Buster <span role="img" aria-label="broken heart">💔</span>
        </h1>
        <p className="mt-2 text-gray-600">
          Find out if your partner is on other "dating" apps.
        </p>

        <SearchForm onSearch={handleSearch} setEmail={setEmail} email={email} />

        <div className="mt-8">
          <Results result={result} loading={loading} error={error} />
        </div>
      </div>
    </div>
  );
}

export default App;