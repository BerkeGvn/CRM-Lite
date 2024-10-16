import { AppShell, Burger, Group, Skeleton, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { ReactNode } from 'react';

interface BasicAppShellProps {
  children: ReactNode;
}

export function BasicAppShell({ children }: BasicAppShellProps) {
  const [opened, { toggle }] = useDisclosure();
  const theme = useMantineTheme();

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
      <AppShell.Navbar p="md">
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton
              key={index}
              h={28}
              mt="sm"
              animate={false}
            />
          ))}
      </AppShell.Navbar>
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
