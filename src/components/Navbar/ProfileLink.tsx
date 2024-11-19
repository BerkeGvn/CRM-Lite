import { Button, Group, Avatar, Text } from '@mantine/core';

const DUMMY_USER = {
  id: 1,
  name: 'Dwight Schrute',
  email: 'beetsrule@schrutefarms.com',
  avatar:
    'https://images.unsplash.com/photo-1587486912758-4367d2015d6c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
        <Avatar
          radius="xl"
          src={DUMMY_USER.avatar}
        />

        <div style={{ flex: 1 }}>
          <Text
            size="sm"
            fw={500}
          >
            {DUMMY_USER.name}
          </Text>

          <Text
            c="dimmed"
            size="xs"
          >
            {DUMMY_USER.email}
          </Text>
        </div>
      </Group>
    </Button>
  );
}
