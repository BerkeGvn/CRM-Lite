import { Stack, Text, Button, Group, Title } from '@mantine/core';
import { TbPencil } from 'react-icons/tb';

export default function ContactDetail({
  label,
  value,
  onEdit,
  title = false,
}: {
  label?: string;
  value: string | undefined;
  onEdit: () => void;
  title?: boolean;
}) {
  // according to the title prop, we want to display the value as a title or normal text
  return (
    <Stack gap={0}>
      <Text c="dimmed">{label}</Text>
      <Group gap="md">
        {value ? (
          title ? (
            <Title order={2}>{value}</Title>
          ) : (
            <Text size="sm">{value}</Text>
          )
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
          color="gray"
          onClick={onEdit}
        >
          <TbPencil size={18} />
        </Button>
      </Group>
    </Stack>
  );
}
