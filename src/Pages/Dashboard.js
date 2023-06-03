import { Container, SimpleGrid, Text} from '@chakra-ui/react'
import React, { useCallback, useEffect } from 'react'
import DashboardHeader from '../Components/DashboardHeader'
import CategoryCard from '../Components/CategoryCard'
import { useCategoriesContext } from '../hooks/useCategoriesContext'
import { useAuthContext } from '../hooks/useAuthContext'
import axios from 'axios'


const Dashboard = () => {

  const { categories, dispatch } = useCategoriesContext()
  const { user } = useAuthContext();
  
  const getCategories = useCallback(() => axios.get(process.env.REACT_APP_CATEGORIES_QUERY_URL, {
    headers:{
      'Authorization':`Bearer ${user.token}`
    }
  })
  .then(result => {
    dispatch({type:'SET_CATEGORIES', payload:result.data})
  })
  .catch(err => {
    console.log(err);
  }),[dispatch, categories, user.token])

  useEffect(() => {
    if(user){
      getCategories();
    }
  },[dispatch, user, getCategories])

  return (
    <Container maxW={'8xl'}>
      <DashboardHeader/>
      {!(categories.length>0)  && <Text textAlign='center' fontSize='xl'>It appears you do not have any categories yet. Create some above.</Text>}
      <SimpleGrid columns={3} spacing={2} minChildWidth="400px">
        {categories.map((category) => (
          <CategoryCard key={category._id} categoryID = {category._id} name = {category.name} locations = {category.locations}/>
        ))}
      </SimpleGrid>
    </Container>
  )
}

export default Dashboard
