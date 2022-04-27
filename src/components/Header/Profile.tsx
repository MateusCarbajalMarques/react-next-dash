import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right" fontWeight="bold">
          <Text>Mateus Carbajal</Text>
          <Text color="gray.300" fontSize="small">
            mateuscarbajal@hotmail.com</Text>
        </Box>
      )}

      <Avatar size="md" name='Mateus Carbajal' src="https://avatars.githubusercontent.com/u/19695981?v=4" />
    </Flex>
  );
}
