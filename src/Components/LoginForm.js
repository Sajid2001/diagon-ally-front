import {useState} from 'react'
import { useLogin } from '../hooks/useLogin';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';

const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login, error, isLoading} = useLogin();

    const handleSubmit = async(e) => {
      e.preventDefault();
      await login(email,password);
    }

  return (
    <div> <Flex
    minH={'100vh'}
    align={'center'}
    justify={'center'}
    bg={useColorModeValue('gray.50', 'gray.800')}>
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <Stack align={'center'}>
        <Heading fontSize={'4xl'}>Sign in to your account</Heading>
      </Stack>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}>
        <Stack spacing={4}>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </FormControl>
          <Stack spacing={5}>
            <Button
              disabled={isLoading}
              colorScheme='teal'
              onClick={handleSubmit}
              >
              Sign in
            </Button>
            {error && <Text textAlign='center' color='red'>{error}</Text>}
            <Stack>
              <Text align={'center'}>
                Don't have an account? <Link href='/signup' color={'blue.400'}>Sign Up</Link>
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Flex></div>
  )
}

export default LoginForm