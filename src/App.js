import { useState } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import SearchBar from './components/SearchBar';
import CountryList from './components/CountryList';

function App() {
  const [searchText, setSearchText] = useState('');
  const [countries, setCountries] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/currency/${searchText}`);
      const data = await response.json();
      
      if (Array.isArray(data)) {
        setCountries(data);
      } else {
        setCountries([data]);
      }
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  return (
    <Box className="App" p={4}>
      <Heading as="h1" size="xl" mb={4}>
        Currency to Country Search
      </Heading>
      <SearchBar searchText={searchText} setSearchText={setSearchText} onSearch={handleSearch} />
      <CountryList countries={countries} />
    </Box>
  );
}

export default App;
