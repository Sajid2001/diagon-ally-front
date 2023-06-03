import { Flex, Box, Heading, Button, Spacer} from '@chakra-ui/react'
import React from 'react'
import { Link } from '@chakra-ui/react'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {

  const {logout} = useLogout();
  const {user} = useAuthContext();

  const handleLogout = () => {
    logout();
  }

  return (
    <Flex as="nav" px="40px" py="20px" alignItems="center" gap="10px">
        <Heading as="h1">
          <Link href='/account/home' _hover={{textDecoration:"none"}}>DiagonAlly</Link>
        </Heading>
        <Spacer/>
        {user && (
        <>
        <Box bg="gray.200" p="10px" borderRadius="10px">{user.email}</Box>
        <Button colorScheme='blue' onClick={handleLogout}>Logout</Button>
        </>
        )}
        {!user && (
          <>
          <Link p="10px" href='/'>Login</Link>
          <Link p="10px" href='/signup'>Sign Up</Link>
          </>
        )}
    </Flex>
  )
}

export default Navbar