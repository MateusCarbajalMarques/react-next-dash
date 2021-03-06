import {
  Flex,
  Button,
  Stack,
  Switch,
  FormControl,
  FormLabel,

} from '@chakra-ui/react'
import { Input } from '../components/Form/Input'

export default function Home() {

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius="8"
        flexDir="column"
      >
        <Stack spacing="4">
          <Input name='email' label='E-mail' type="email" />
          <Input name='password' label='Senha' type="password" />

          <FormControl display='flex' alignItems='center'>
            <FormLabel htmlFor='email-alerts' mb='0'>
              Lembrar desse login?
            </FormLabel>
            <Switch id='email-alerts' colorScheme='pink' size='md' />
          </FormControl>


        </Stack>

        <Button type="submit" mt="6" size="lg" colorScheme="pink">Entrar</Button>


      </Flex>
    </Flex>
  )
}
