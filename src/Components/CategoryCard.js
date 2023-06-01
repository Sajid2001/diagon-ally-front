import React, { useState } from 'react'
import {Heading, Card, CardHeader, VStack, StackDivider, Button} from '@chakra-ui/react'
import Location from './Location'
import LocationForm from './LocationForm'
import axios from 'axios'


const CategoryCard = (props) => {

  const deleteCategory = () => {
    axios.delete(`${process.env.REACT_APP_CATEGORIES_QUERY_URL}${props.categoryID}`)
    .then(response => {
      console.log(response);
      window.location.reload();
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <div>
        <Card maxW="md" mb="20px">
            <CardHeader>
                <Heading size='xl' p="10px">{props.name}</Heading>
                <Button colorScheme='red'  p="10px" m="10px" onClick={deleteCategory}>Delete</Button>
            </CardHeader>
            <VStack
                divider={<StackDivider borderColor='gray.200'/>}
                spacing={4}
                align='stretch'
                p="10px"
                >
                  {props.locations.map((location) =>(
                    <Location key={location._id} locationID = {location._id} categoryID={props.categoryID} location = {location}/>
                  ))}
                <LocationForm categoryID = {props.categoryID}/>
            </VStack>
        </Card>
    </div>
  )
}

export default CategoryCard