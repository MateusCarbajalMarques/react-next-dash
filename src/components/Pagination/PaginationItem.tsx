import { Button, ButtonProps } from '@chakra-ui/react';

interface PaginationItemProps extends ButtonProps {
  number: number
  isCurrent?: boolean;
}

export function PaginationItem({ number, isCurrent = false, ...rest }: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bgColor: 'pink.500',
          cursor: 'default'
        }}
        {...rest}
      >
        {number}
      </Button>
    )
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      _hover={{
        bgColor: 'pink.500',

      }}
      {...rest}
    >
      {number}
    </Button>
  )
}
