import { Container, SimpleGrid} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import DashboardHeader from '../Components/DashboardHeader'
import CategoryCard from '../Components/CategoryCard'
import axios from 'axios'


const Dashboard = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = () => axios.get(process.env.REACT_APP_CATEGORIES_QUERY_URL)
  .then(result => {
    setCategories(result.data);
  })
  .catch(err => {
    console.log(err);
  })

  useEffect(() => {
    getCategories();
  },[])

  return (
    <Container maxW={'8xl'}>
      <DashboardHeader/>
      <SimpleGrid columns={3} spacing={5} minChildWidth="400px">
        {categories.map((category) => (
          <CategoryCard key={category._id} categoryID = {category._id} name = {category.name} locations = {category.locations}/>
        ))}
      </SimpleGrid>
    </Container>
  )
}

export default Dashboard
