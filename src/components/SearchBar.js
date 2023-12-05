// SearchBar Component
import React from 'react';
import { Box, Input, Button } from '@chakra-ui/react';

const SearchBar = ({ searchText, setSearchText, onSearch }) => {
  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch();
  };

  return (
    <Box as="form" onSubmit={handleSubmit} display="flex" alignItems="center" flexWrap="wrap">
      <Input
        type="text"
        value={searchText}
        onChange={handleChange}
        placeholder="Enter currency code"
        mr={{ base: 0, md: 2 }} // Adjust margin for different screen sizes
        mb={{ base: 2, md: 0 }} // Adjust margin for different screen sizes
        size="md"
        variant="filled"
        borderRadius="md"
        bg="white"
        flex={{ base: '100%', md: 'auto' }} // Adjust flex basis for different screen sizes
        width={{ base: '100%', md: '20%' }} // Set width for different screen sizes
        _hover={{ bg: 'gray.100' }}
        _focus={{ bg: 'gray.100', borderColor: 'blue.300' }}
      />
      <Button type="submit" colorScheme="blue" variant="solid" size="md" flexShrink={0}>
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
