import { Link as ChakraLink, Text, Icon, LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import { ElementType } from 'react';
import Link from 'next/link';

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  childrem: string;
  href: string;

}
export function NavLink({ icon, childrem, href, ...rest }: NavLinkProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">{childrem}</Text>
      </ChakraLink >
    </Link>
  );
}
