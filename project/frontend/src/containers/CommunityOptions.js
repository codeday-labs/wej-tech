import React, { useState } from 'react';
import { Flex, Spacer, Text, useMediaQuery, Icon, Button } from '@chakra-ui/react';
import { FaPenNib, FaComments, FaFortAwesomeAlt } from 'react-icons/fa';
import BlogCreate from './BlogCreate';
import EventSearch from './EventSearch';
import ReviewCreate from './ReviewCreate';
//https://react-icons.github.io/react-icons/icons?name=fa

const Greeting = ({ selectedOption }) => {
  if (selectedOption === "Create a Blog") {
    // return <h4>Create one Blog</h4>;
    return <BlogCreate></BlogCreate>
  }
  if (selectedOption === "Create a Review") {
    return <ReviewCreate></ReviewCreate>;
  }
  if (selectedOption === "Search for Events in the Area") {
    return <EventSearch></EventSearch>;
  }
  return undefined;
}

export const CommunityOption = () => {
  const [selectedOption, setSelectedOption] = useState(undefined);
  const [isLargerThan48] = useMediaQuery('(min-width: 48em)');
 
  const array = [
    {
      id: 1,
      text: 'Create a Blog',
      icon: FaPenNib,
    },
    {
      id: 2,
      text: 'Create a Review',
      icon: FaComments,
    },
    {
      id: 3,
      text: 'Search for Events in the Area',
      icon: FaFortAwesomeAlt,
    },
  ];
 
  return (
    <Flex
      minH="70vh"
      alignItems="center"
      justifyContent="space-between"
      w="full"
      py="16"
      px={isLargerThan48 ? '16' : '6'}
      flexWrap="wrap"
      flexDirection={isLargerThan48 ? 'row' : 'column'}
    >
      {array.map((arr) => (
        <>
          <Button onClick={() => setSelectedOption(arr.text)}
            height="150px"
            bg="blackAlpha.200"
            width={isLargerThan48 ? '32%' : 'full'}
            shadow="md"
            p="6"
            alignItems="center"
            justifyContent="center"
            borderRadius="md"
            flexDirection="column"
            textAlign="center"
            mb={isLargerThan48 ? '0' : '4'}
            border="1px solid #C4DDFF"
          >
            <Icon as={arr.icon} boxSize={14} color="blue.600" mb="5" />
            <Text>{arr.text}</Text>
          </Button>
          <Spacer />
        </>
      ))}
      <Greeting selectedOption={selectedOption} />
    </Flex>
    
  );
};
 
export default CommunityOption; 
