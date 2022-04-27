import { Flex, Box, Text, Stack } from '@chakra-ui/react';
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri';
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export function SideBarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="Geral">
        <NavLink icon={RiDashboardLine} href="/dashboard" childrem="Dashboard" />
        <NavLink icon={RiContactsLine} href="/users" childrem="Usuário" />
      </NavSection>

      <NavSection title="AUTOMAÇÃO">
        <NavLink icon={RiInputMethodLine} href="/forms" childrem="Formulario" />
        <NavLink icon={RiGitMergeLine} href="/automation" childrem="Automação" />
      </NavSection>


    </Stack>
  );
}

