// // CountryList Component
// import React from 'react';
// import { Box, Heading, UnorderedList, ListItem, Image, Text } from '@chakra-ui/react';

// const CountryList = ({ countries }) => {
//   return (
//     <Box>
//       <Heading as="h2" size="md" mb={4}>
//         Associated Countries
//       </Heading>
//       <UnorderedList>
//         {countries.map((country, index) => (
//           <ListItem
//             key={index}
//             display="flex"
//             alignItems="center"
//             mb={2}
//             borderRadius="md"
//             p={2}
//             bg="gray.100"
//             _hover={{
//               cursor: 'pointer',
//               backgroundColor: 'gray.200', // Change background color on hover
//             }}
//           >
//             <Box
//               boxSize="30px"
//               borderRadius="50%"
//               marginRight="10px"
//               transition="transform 0.2s"
//               _hover={{
//                 transform: 'scale(1.1)', // Scale up on hover
//               }}
//             >
//               {country.flags && country.flags.png ? (
//                 <Image src={country.flags.png} boxSize="30px" borderRadius="50%" />
//               ) : (
//                 <Box w="30px" h="30px" backgroundColor="gray.200" borderRadius="50%" />
//               )}
//             </Box>
//             <Text fontSize="md" fontWeight="bold">
//               {country.name && country.name.common ? country.name.common : 'Country Name Unavailable'}
//             </Text>
//           </ListItem>
//         ))}
//       </UnorderedList>
//     </Box>
//   );
// };

// export default CountryList;


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
                transform: 'scale(1.1)',
              }}
            >
              {country.flags && country.flags.png ? (
                <Image src={country.flags.png} boxSize="100%" borderRadius="50%" />
              ) : (
                <Box w="100%" h="100%" backgroundColor="gray.200" borderRadius="50%" />
              )}
            </Box>
            <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="bold"> {/* Adjust font size based on screen size */}
              {country.name && country.name.common ? country.name.common : 'Country Name Unavailable'}
            </Text>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default CountryList;
