
// CountryList Component
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
          <ListItem
            key={index}
            display="flex"
            alignItems="center"
            mb={2}
            borderRadius="md"
            p={2}
            bg="gray.100"
            _hover={{
              cursor: 'pointer',
              backgroundColor: 'gray.200',
            }}
            _last={{ mb: 0 }} // Remove bottom margin for the last item
          >
            <Box
              boxSize={{ base: '30px', md: '40px' }} // Adjust box size based on screen size
              borderRadius="50%"
              marginRight={{ base: '10px', md: '20px' }} // Adjust margin based on screen size
              transition="transform 0.2s"
              _hover={{
                transform: 'scale(2.0)',
              }}
            >
              {country.flags && country.flags.png ? (
                <Image src={country.flags.png} boxSize="40px" borderRadius="50%" alt={`${country.name} Flag`} />
              ) : (
                <Box w="40px" h="40px" backgroundColor="gray.200" borderRadius="50%" />
              )}
            </Box>
            <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="medium" color="gray.800">
              <strong>{country.name.common}</strong> - Population: {country.population}
            </Text>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default CountryList;
