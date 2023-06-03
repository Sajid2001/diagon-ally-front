import React from 'react'
import {Heading, Card, CardHeader, CardBody, Button} from '@chakra-ui/react'
import axios from 'axios'
import { useCategoriesContext } from '../hooks/useCategoriesContext'
import { useAuthContext } from '../hooks/useAuthContext'

const Location = (props) => {

  const { dispatch } = useCategoriesContext();
  const { user } = useAuthContext();

  const removeLocation = (e) => {
    e.preventDefault();
    if(!user){
      return;
    }
    axios.put(`${process.env.REACT_APP_CATEGORIES_QUERY_URL}${props.categoryID}/${props.locationID}`,{}, {
      headers:{
        'Authorization':`Bearer ${user.token}`
      }
    })
    .then(response => {
      console.log(response);
      dispatch({type:'DELETE_LOCATION', payload:{categoryId: props.categoryID,locationId: props.locationID}})
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <div key={props.locationID}>
        <Card bgColor={'teal.100'}>
            <CardHeader>
                <Heading size='xl'>{props.location.name}</Heading>
                <CardBody>
                    {props.location.address}
                </CardBody>
                <Button colorScheme='pink' onClick={removeLocation}>Delete</Button>
            </CardHeader>
        </Card>
    </div>
  )
}

export default Location