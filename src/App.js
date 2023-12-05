import React, { useState, useEffect } from 'react';
import { Box, Heading, Spinner, Alert, AlertIcon } from '@chakra-ui/react';
import SearchBar from './components/SearchBar';
import CountryList from './components/CountryList';

function App() {
  const [searchText, setSearchText] = useState('');
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`https://restcountries.com/v3.1/currency/${searchText}`);
      const data = await response.json();

      if (response.ok) {
        if (Array.isArray(data)) {
          setCountries(data);
        } else {
          setCountries([data]);
        }
      } else {
        setError('Currency not found. Please enter a valid currency code.');
        setCountries([]);
      }
    } catch (error) {
      setError('Error fetching data. Please try again later.');
      console.error('Error fetching data: ', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchText === '') {
      setCountries([]);
    }
  }, [searchText]);

  return (
    <Box className="App" p={{ base: 2, md: 4, lg: 6 }}>
      <Heading as="h1" size="xl" mb={{ base: 2, md: 4 }}>
        Currency to Country Search
      </Heading>
      <SearchBar searchText={searchText} setSearchText={setSearchText} onSearch={handleSearch} />
      <Box mt={{ base: 4, md: 6 }}>
        {loading && <Spinner size="lg" color="blue.500" />}
        {error && (
          <Alert status="error" my={{ base: 4, md: 6 }}>
            <AlertIcon />
            {error}
          </Alert>
        )}
        <CountryList countries={countries} />
      </Box>
    </Box>
  );
}

export default App;
