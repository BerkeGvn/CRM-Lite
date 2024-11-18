import { Button, Group, Avatar, Text } from '@mantine/core';

const DUMMY_USER = {
  id: 1,
  name: 'Harriette Spoonlicker',
  email: 'hspoonlicker@outlook.com',
  avatar: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png',
};

export default function ProfileLink() {
  return (
    <Button
      variant="subtle"
      color="gray"
      component="a"
      href="#"
      fullWidth
      h="60px"
    >
      <Group>
        <Avatar radius="xl" />

        <div style={{ flex: 1 }}>
          <Text
            size="sm"
            fw={500}
          >
            Harriette Spoonlicker
          </Text>

          <Text
            c="dimmed"
            size="xs"
          >
            hspoonlicker@outlook.com
          </Text>
        </div>
      </Group>
    </Button>
  );
}
