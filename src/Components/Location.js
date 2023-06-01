import React from 'react'
import {Heading, Card, CardHeader, CardBody, Button} from '@chakra-ui/react'
import axios from 'axios'

const Location = (props) => {

  const removeLocation = (e) => {
    e.preventDefault();
    axios.put(`${process.env.REACT_APP_CATEGORIES_QUERY_URL}${props.categoryID}/${props.locationID}`, {})
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
        <Card maxW="md" bgColor={'teal.100'}>
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