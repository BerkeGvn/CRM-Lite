import { AppShell, Burger, Flex, Group, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Navbar from '../navbar/Navbar';
import ProfileLink from '../navbar/ProfileLink';
import ColorScheme from '../colorScheme/ColorScheme';
import RootLayout from '../../layout/RootLayout';
import classes from './appShell.module.css';

export function BasicAppShell() {
  const [opened, { toggle }] = useDisclosure();

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
          <Flex
            w="100%"
            justify={'space-between'}
            align={'center'}
          >
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />

            <Title order={3}>Kapia Corp.</Title>
            <ColorScheme></ColorScheme>
          </Flex>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <AppShell.Section grow>
          <Navbar />
        </AppShell.Section>
        <AppShell.Section>
          <ProfileLink></ProfileLink>
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main className={classes.main}>
        <RootLayout />
      </AppShell.Main>
    </AppShell>
  );
}
