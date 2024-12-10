import { Stack, Text, Button, Group } from '@mantine/core';
import { TbPencil } from 'react-icons/tb';

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
        {value ? (
          <Text size="sm">{value}</Text>
        ) : (
          <Text
            c="red.6"
            size="sm"
          >
            {'Not available'}
          </Text>
        )}
        <Button
          size="xs"
          variant="subtle"
          color="cyan"
          onClick={onEdit}
        >
          <TbPencil size={20} />
        </Button>
      </Group>
    </Stack>
  );
}
