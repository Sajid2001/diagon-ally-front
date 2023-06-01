import React from 'react'
import {Heading, Button, Stack} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const DashboardHeader = () => {

  const navigate = useNavigate();

  const navigateToForm = () => navigate('/add')

  return (
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 20 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
          lineHeight={'110%'}>
          Your Categories
        </Heading>
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'blue'}
            bg={'blue.400'}
            _hover={{ bg: 'blue.500' }}
            onClick={navigateToForm}>
            Create a New Category
          </Button>
        </Stack>
      </Stack>
  )
}

export default DashboardHeader