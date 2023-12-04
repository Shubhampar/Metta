import React from 'react';
import { Box, Heading, UnorderedList, ListItem, Image, Text } from '@chakra-ui/react';

const CountryList = ({ countries }) => {
  return (
    <Box>
      <Heading as="h2" size="md" mb={4}>
        Associated Countries
      </Heading>
      <UnorderedList>
        {countries.map((country, index) => (
          <ListItem key={index} display="flex" alignItems="center" mb={2}>
            {country.flags && country.flags.png ? (
              <Image src={country.flags.png} boxSize="30px" borderRadius="50%" marginRight="10px" />
            ) : (
              <Box w="30px" h="30px" backgroundColor="gray.200" borderRadius="50%" marginRight="10px" />
            )}
            <Text>{country.name && country.name.common ? country.name.common : 'Country Name Unavailable'}</Text>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default CountryList;
