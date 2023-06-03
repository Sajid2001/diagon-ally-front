import React from 'react'
import CategoryForm from '../Components/CategoryForm'
import { Container, Heading, Stack } from '@chakra-ui/react'

const MakeCategoryPage = () => {
  return (
    <Container>
        <Stack
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 20 }}>
        <Heading
            textAlign="center"
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
          lineHeight={'110%'}>
          Make A Category
        </Heading>
        <CategoryForm/>
        </Stack>
    </Container>
  )
}

export default MakeCategoryPage