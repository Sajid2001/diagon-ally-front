import React, { useState } from 'react'
import { Box, Button, FormControl,Input, FormHelperText, FormLabel, Text} from '@chakra-ui/react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useCategoriesContext } from '../hooks/useCategoriesContext'
import { useAuthContext } from '../hooks/useAuthContext';

const CategoryForm = () => {
    const { dispatch } = useCategoriesContext();
    const [name,setName] = useState('');
    const [error, setError] = useState(null)
    const navigate = useNavigate();
    const { user } = useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user){
      setError('You must be logged in')
      return
    }

    axios.post(process.env.REACT_APP_CATEGORIES_QUERY_URL,{name:name}, {
      headers:{
        'Authorization':`Bearer ${user.token}`
      }
    })
    .then(response => {
      console.log(response);
      navigate('/account/home');
      dispatch({type:'CREATE_CATEGORY', payload:response.data})
    })
    .catch(err => {
      console.log(err);
    })
    
  }

  return (
    <>
    <Box shadow="xl" bgColor="teal.200" borderRadius="lg" p="15px" maxW="xl">
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
    {error && <Text rounded="lg"  textAlign='center' color='red'>{error}</Text>}
    </>
  )
}

export default CategoryForm