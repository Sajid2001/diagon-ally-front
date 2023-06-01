import { Flex, Box, Heading, Button, Spacer} from '@chakra-ui/react'
import React from 'react'
import { Link } from '@chakra-ui/react'

const Navbar = () => {

  return (
    <Flex as="nav" px="40px" py="20px" alignItems="center" gap="10px">
        <Heading as="h1">
          <Link href='/' _hover={{textDecoration:"none"}}>DiagonAlly</Link>
        </Heading>
        <Spacer/>
        <Box bg="gray.200" p="10px" borderRadius="10px">M</Box>
        <Button colorScheme='blue'>Logout</Button>
    </Flex>
  )
}

export default Navbar