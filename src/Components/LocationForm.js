import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Text, FormHelperText, Heading, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import axios from 'axios';

const LocationForm = (props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [locationData, setLocationData] = useState(null);


  const handleSearch = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_MAP_QUERY_URL}${searchQuery}`);
      
      const data = await response.json();
      if (data) {
        const { address, name } = data;
        setLocationData({ address, name });
        console.log(data);
      } else {
        setLocationData(null);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const addLocation = (e) => {
    e.preventDefault();
    axios.put(`${process.env.REACT_APP_CATEGORIES_QUERY_URL}${props.categoryID}`, {
        name:locationData.name,
        address:locationData.address
    })
    .then(response => {
      console.log(response);
      window.location.reload();
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <Box>
      <FormControl>
        <FormLabel>Search Location</FormLabel>
        <Input
          m="4px"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <FormHelperText>Enter a location to search</FormHelperText>
      </FormControl>

      <Button m="8px" colorScheme="blue" onClick={handleSearch}>
        Search
      </Button>

      {locationData && (
        <Card m="8px">
        <CardHeader>
          <Heading size='xl'>{locationData.name}</Heading>
        </CardHeader>
        <CardBody>
          <Text>{locationData.address}</Text>
        </CardBody>
        <CardFooter>
          <Button colorScheme="blue" m="10px" onClick={addLocation}>Add</Button>
        </CardFooter>
      </Card>
      )}

    </Box>
  );
};

export default LocationForm;
