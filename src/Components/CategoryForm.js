import React, { useState } from 'react'
import { Box, Button, FormControl,Input, FormHelperText, FormLabel} from '@chakra-ui/react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const CategoryForm = () => {
    const [name,setName] = useState('');
    const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(process.env.REACT_APP_CATEGORIES_QUERY_URL,{name:name})
    .then(response => {
      console.log(response);
      navigate('/');
    })
    .catch(err => {
      console.log(err);
    })
    
  }

  return (
    <Box bgColor="teal.200" borderRadius="10px" p="15px" maxH="225px" maxW="xl">
    <FormControl p="10px">
        <FormLabel>Add Category</FormLabel>
        <Input
            bgColor="white"
            p="10px"
            m="4px"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormHelperText p="10px">Add A Category</FormHelperText>
      </FormControl>

      <Button p="10px" m="8px" colorScheme="teal" onClick={handleSubmit}>
        Add
      </Button>
    </Box>
  )
}

export default CategoryForm