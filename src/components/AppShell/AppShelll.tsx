import { AppShell, Burger, Group, NavLink, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { ReactNode, useState } from 'react';

interface BasicAppShellProps {
  children: ReactNode;
}
const data = [
  { label: 'Dashboard', description: 'Item with description' },
  { label: 'Contacts', description: 'Item with description' },
  { label: 'Orders', description: 'Item with description' },
];

export function BasicAppShell({ children }: BasicAppShellProps) {
  const [opened, { toggle }] = useDisclosure();
  const [active, setActive] = useState(0);
  const theme = useMantineTheme();

  const items = data.map((item, index) => (
    <NavLink
      href="#"
      key={item.label}
      active={index === active}
      label={item.label}
      onClick={() => setActive(index)}
      color="cyan"
    />
  ));

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group
          h="100%"
          px="md"
        >
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
          />
          <h3>Kapia Corp.</h3>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">{items}</AppShell.Navbar>
      <AppShell.Main
        style={{
          backgroundColor: theme.colors.gray[2],
        }}
      >
        {children}
      </AppShell.Main>
    </AppShell>
  );
}
