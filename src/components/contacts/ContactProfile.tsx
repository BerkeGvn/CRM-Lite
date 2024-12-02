import { useParams } from 'react-router';
import useContactStore from '../../stores/contactStore';
import { Card, Avatar, Text, Title, Stack, Group, Divider } from '@mantine/core';

// Reusable component for displaying contact fields
function ContactDetail({ label: label, value }: { label: string; value: string | undefined }) {
  return (
    <Stack gap={2}>
      <Text c="dimmed">{label}</Text>
      <Text size="sm">{value || 'Not available'}</Text>
    </Stack>
  );
}

export default function ContactProfile() {
  const { id } = useParams();
  const { findContact } = useContactStore();
  const contact = findContact(Number(id));

  if (!contact) {
    return <Title c="red">Contact not found.</Title>;
  }

  return (
    <Card
      padding="lg"
      radius="md"
      withBorder
    >
      <Group
        align="center"
        gap="lg"
        mb="lg"
      >
        <Avatar
          size={120}
          radius={120}
          src={contact.photo}
          alt={contact.name}
        />
        <Title order={2}>{contact.name}</Title>
      </Group>
      <Divider my="sm" />
      <Stack gap="lg">
        <ContactDetail
          label="Company"
          value={contact.company}
        />
        <ContactDetail
          label="Title"
          value={contact.title}
        />
        <ContactDetail
          label="Phone Number"
          value={contact.phone}
        />
        <ContactDetail
          label="Email"
          value={contact.email}
        />
      </Stack>
    </Card>
  );
}
