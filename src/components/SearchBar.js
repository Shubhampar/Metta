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
    <Box as="form" onSubmit={handleSubmit} display="flex" alignItems="center">
      <Input
        type="text"
        value={searchText}
        onChange={handleChange}
        placeholder="Enter currency code"
        mr={2}
      />
      <Button type="submit">Search</Button>
    </Box>
  );
};

export default SearchBar;
