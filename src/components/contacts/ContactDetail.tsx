import { Stack, Text, Button, Group } from '@mantine/core';

export default function ContactDetail({
  label,
  value,
  onEdit,
}: {
  label: string;
  value: string | undefined;
  onEdit: () => void;
}) {
  return (
    <Stack gap={0}>
      <Text c="dimmed">{label}</Text>
      <Group gap="sm">
        <Text size="sm">{value || 'Not available'}</Text>
        <Button
          size="xs"
          variant="subtle"
          onClick={onEdit}
        >
          Edit
        </Button>
      </Group>
    </Stack>
  );
}
